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
const { depositWithdrawalEnumMappings } = require('./enums.js')

// const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");
const kafkaBrokers = process.env.KAFKA_BROKERS;

console.log(process.env);

const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
// const kafkaProducer = new kafka.Producer(kafkaClient);
// const kafkaAdmin = new kafka.Admin(kafkaClient);
let kafkaConsumer;

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS deposits_withdrawals (
    type TEXT NOT NULL,
    id TEXT NOT NULL,
    status TEXT NOT NULL,
    party_id TEXT NOT NULL,
    asset TEXT NOT NULL,
    amount NUMERIC,
    created_timestamp BIGINT,
    finalized_timestamp BIGINT,
    ext_erc20_addr TEXT,
    PRIMARY KEY (id, created_timestamp)
    );

SELECT create_hypertable('deposits_withdrawals', 'created_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
`;

const upsertDepositWithdrawal = `
INSERT INTO deposits_withdrawals (
    type,
    id,
    status,
    party_id,
    asset,
    amount,
    created_timestamp,
    finalized_timestamp,
    ext_erc20_addr
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9
) ON CONFLICT (id, created_timestamp) DO UPDATE SET (
    type,
    id,
    status,
    party_id,
    asset,
    amount,
    created_timestamp,
    finalized_timestamp,
    ext_erc20_addr
) = (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9
) RETURNING *;
`;

const setIntegerNowFunc = `
SELECT set_integer_now_func('deposits_withdrawals', 'current_time_ns');
`;

const continuousAggregates = {
    pnls: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW pnls_5m
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                party_id,
                time_bucket(300000000000, updated_at) AS bucket,
                last(realised_pnl, updated_at) AS last_rpnl,
                max(realised_pnl) AS max_rpnl,
                min(realised_pnl) AS min_rpnl,
                last(unrealised_pnl, updated_at) as last_upnl,
                max(unrealised_pnl) as max_upnl,
                min(unrealised_pnl) as min_upnl
            FROM position_updates
            GROUP BY market_id, party_id, time_bucket(300000000000, updated_at);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('pnls_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        },
        // interval_1h: {},
        // interval_1d: {}
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
                    // Set integer time.
                    pgClient.query(setIntegerNowFunc, (err, res) => {
                        if(!err) {
                            console.log(res);
                            // createContAggs(pgPool, ["pnls"]);
                            
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
        topic: "deposits_withdrawals",
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
    kafkaConsumer = new kafka.Consumer(kafkaClient, [{ topic: "blocks" },{ topic: "deposits_withdrawals" }], { groupId: "deposits-withdrawals-group" });
    kafkaConsumer.on("message", (msg) => {

        const dateTime = new Date(Date.now()).toISOString();
        // console.log(`${dateTime}: New message`);

        const evt = JSON.parse(msg.value);

        if (msg.topic == "blocks") {
            
            // console.log(evt);
            // if (evt.beginBlock) recentBlocks.push(evt.beginBlock);

        }

        if (msg.topic == "deposits_withdrawals") {
            
            console.dir(evt, { depth: null });

            if (evt.Event.Deposit) {
                evt.Event.Deposit.status = depositWithdrawalEnumMappings.status[evt.Event.Deposit.status];
                evt.Event.Deposit["type"] = "DEPOSIT";
                persistDeopsitsWithdrawals(evt.Event.Deposit);

                console.log(evt);
            } else if (evt.Event.Withdrawal) {
                evt.Event.Withdrawal.status = depositWithdrawalEnumMappings.status[evt.Event.Withdrawal.status];
                evt.Event.Withdrawal["type"] = "WITHDRAWAL";
                persistDeopsitsWithdrawals(evt.Event.Withdrawal);

                console.log(evt);
            }

        }

    });
};


const persistDeopsitsWithdrawals = (evt) => {

    // console.log(pos);
    let row;

    if (evt.type == "DEPOSIT") {
        row = [
            evt.type, evt.id, evt.status, evt.party_id, evt.asset, evt.amount, evt.created_timestamp,
            evt.credited_timestamp, undefined
        ];
    }

    if (evt.type == "WITHDRAWAL") {
        row = [
            evt.type, evt.id, evt.status, evt.party_id, evt.asset, evt.amount, evt.created_timestamp,
            evt.withdrawn_timestamp, evt.ext.Ext.Erc20.receiver_address
        ];
    }

    pgPool.query(upsertDepositWithdrawal, row, (err, res) => {
        if (!err) {
            console.log("Insert Successful")
            console.dir(res, { depth: null });
        } else {
            console.log("Error inserting deposit/withdrawal.");
        }
    });

};


setTimeout(start, 38000);