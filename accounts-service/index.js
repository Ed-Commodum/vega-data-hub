const { Client, Pool } = require('pg');

const pgClient = new Client({
    host: process.env.TIMESCALEDB_HOST,
    port: process.env.TIMESCALEDB_PORT,
    database: 'postgres',
    user: 'postgres',
    password: 'ilovetimescaledb'
});

const pgPool = new Pool({
    host: process.env.TIMESCALEDB_HOST,
    port: process.env.TIMESCALEDB_PORT,
    database: 'postgres',
    user: 'postgres',
    password: 'ilovetimescaledb'
});


const kafka = require("kafka-node");

// const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");
const kafkaBrokers = process.env.KAFKA_BROKERS;

console.log(process.env);

const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
// const kafkaProducer = new kafka.Producer(kafkaClient);
// const kafkaAdmin = new kafka.Admin(kafkaClient);
let kafkaConsumer;

const { accountEnumMappings } = require('./accountEnums.js');
const { RecentBlocks } = require('./ringBuffers.js');
const recentBlocks = new RecentBlocks(500);
const accountUpdateQueue = [];
let intervalId;

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS account_updates (
    id TEXT NOT NULL,
    owner TEXT NOT NULL,
    balance NUMERIC,
    asset TEXT NOT NULL,
    market_id TEXT NOT NULL,
    type TEXT NOT NULL,
    synth_timestamp BIGINT,
    PRIMARY KEY (id, synth_timestamp)
);

SELECT create_hypertable('account_updates', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
`;

const insertAccountUpdate = `
INSERT INTO account_updates (
    id,
    owner,
    balance,
    asset,
    market_id,
    type,
    synth_timestamp
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7
);
`;

const upsertAccountUpdate = `
INSERT INTO accountUpdates (
    
) values (
    
) ON CONFLICT () DO UPDATE SET (

) = (
    
) RETURNING *;
`;

const setIntegerNowFunc = `
SELECT set_integer_now_func('account_updates', 'current_time_ns');
`;

const continuousAggregates = {
    marginAccounts: {
        interval_1m: {
            createMatView: `
            `,
            addRefreshPolicy: {

            }
        },
        interval_5m: { 
            createMatView: {

            },
            addRefreshPolicy: {

            }

        },
        interval_1h: {

        },
        interval_1d: {

        }
    }
};

const createContAggs = async (client, types) => {

    const queryQueue = [];

    for (let type of types) {
        for (let [ interval, queries ] of Object.entries(continuousAggregates[type])) {
            for (let [ name, query ] of Object.entries(queries)) {
                queryQueue.push({
                    type: type,
                    interval: interval,
                    name: name,
                    query: query
                });
            };
        };
    };

    const next = (obj) => {
        return new Promise((resolve, reject) => {
            console.log(`Submitting query ${obj.name} of type ${obj.type} for interval ${obj.interval}.`)
            client.query(obj.query, (err, res) => {
                if (!err) {
                    console.log(res);
                    resolve();
                } else {
                    console.log("Query failed: ", err);
                    reject();
                }
            });
        });
    };

    while (queryQueue.length) {
        await next(queryQueue.shift());
    };

};

const flushAccountUpdateQueue = () => {
    
    clearInterval(intervalId);

    while (accountUpdateQueue.length) {
        
        const event = accountUpdateQueue.shift();
        const height = event.id.split('-')[0];
        const eventIndex = event.id.split('-')[1];
        const block = recentBlocks.get(height);

        if (!block) {
            accountUpdateQueue.unshift(event);
            break;
        }
        
        event.Event.Account["synth_timestamp"] = BigInt(block.timestamp) + BigInt(eventIndex);

        persistAccountUpdate(formatAccountUpdate(event.Event.Account));

    }

    intervalId = setInterval(flushAccountUpdateQueue, 50);

};

intervalId = setInterval(flushAccountUpdateQueue, 50);


const start = () => {

    // Connect to Kafka.
    const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
    const kafkaAdmin = new kafka.Admin(kafkaClient);

    // Connect to postgres.
    pgPool.connect((err) => {
        if (err) {
            console.log(err);
        }
    });

    pgClient.connect((err) => {
        if (!err) {
            console.log("Connected to postgres...");
            pgClient.query(createTablesQuery, (err, res) => {
                if (!err) {
                    console.log("Created tables.");
                    console.log(res);
                    pgClient.query(setIntegerNowFunc, (err, res) => {
                        if(!err) {
                            console.log(res);
                            // createContAggs(pgClient, ["marginAccounts"]);
                            
                        } else {
                            console.log(err);
                        };
                    });
                } else {
                    console.log(err);
                };
            });
        } else {
            console.log(err);
        };
    });

    const topic = [{
        topic: "accounts",
        partitions: 1,
        replicationFactor: 1
    }]

    kafkaAdmin.createTopics(topic, (err, result) => {
        if (!err) {

            console.log("Topics created successfully");
            // Set up consumer
            setConsumer(kafkaConsumer);

        } else {
            console.log(err);
        }
    });
};

const setConsumer = (kafkaConsumer) => {
    kafkaConsumer = new kafka.Consumer(kafkaClient, [ { topic: "blocks" }, { topic: "accounts" } ], { groupId: "accounts-group" });
    kafkaConsumer.on("message", (msg) => {

        const dateTime = new Date(Date.now()).toISOString();
        // console.log(`${dateTime}: New message`);

        const evt = JSON.parse(msg.value);

        console.dir(evt, { depth: null });

        if (msg.topic == "blocks") {
            // Save recent blocks in memory to use for calculating synthetic timestamps

            if (evt.Event.BeginBlock) {

                recentBlocks.push(evt.Event.BeginBlock);

            }

        }


        if (msg.topic == "accounts") {
            
            // console.log(evt);

            if (evt.Event.Account) {

                accountUpdateQueue.push(evt);

            }


        }

    });
};

const formatAccountUpdate = (acc) => {

    acc.type = accountEnumMappings.type[acc.type];

    const row = [
        acc.id, acc.owner, acc.balance, acc.asset, acc.market_id, acc.type, acc.synth_timestamp
    ];

    return row;

}

const persistAccountUpdate = (row) => {

    pgPool.query(insertAccountUpdate, row, (err, res) => {
        if (!err) {
            // console.dir(res, { depth: null });
        } else {
            console.log("Error inserting account update.");
            console.log(err);
        }
    });

};


setTimeout(start, 38000);