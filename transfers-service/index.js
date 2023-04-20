const { Client, Pool } = require('pg');
const format = require('pg-format');

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

const { transferEnumMappings } = require('./transferEnums.js');
const { RecentBlocks } = require('./ringBuffers.js');
const recentBlocks = new RecentBlocks(500);
const ledgerMovementsQueue = [];
const ledgerMovementsToInsert = [];
const transfersQueue = [];
const transfersToInsert = [];
let ledgerMovementsIntervalId;
let transfersIntervalId;
let intervalId;

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS transfers (
    timestamp BIGINT
);

CREATE TABLE IF NOT EXISTS ledger_movements (
    from_account_asset TEXT NOT NULL,
    from_account_owner TEXT NOT NULL,
    from_account_type TEXT NOT NULL,
    from_account_market TEXT NOT NULL,
    to_account_asset TEXT NOT NULL,
    to_account_owner TEXT NOT NULL,
    to_account_type TEXT NOT NULL,
    to_account_market TEXT NOT NULL,
    amount NUMERIC,
    type TEXT NOT NULL,
    timestamp BIGINT,
    from_balance NUMERIC,
    to_balance NUMERIC,
    PRIMARY KEY (
        timestamp,
        from_account_asset,
        from_account_owner,
        from_account_type,
        from_account_market,
        to_account_asset,
        to_account_owner,
        to_account_type,
        to_account_market,
        from_balance,
        to_balance
    )
);

SELECT create_hypertable('transfers', 'timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
SELECT create_hypertable('ledger_movements', 'timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
`;

const insertLedgerMovements = `
INSERT INTO ledger_movements (
    from_account_asset,
    from_account_owner,
    from_account_type,
    from_account_market,
    to_account_asset,
    to_account_owner,
    to_account_type,
    to_account_market,
    amount,
    type,
    timestamp,
    from_balance,
    to_balance
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11,
    $12,
    $13
) ON CONFLICT DO NOTHING;
`;

const fInsertLedgerMovements = `
INSERT INTO ledger_movements (
    from_account_asset,
    from_account_owner,
    from_account_type,
    from_account_market,
    to_account_asset,
    to_account_owner,
    to_account_type,
    to_account_market,
    amount,
    type,
    timestamp,
    from_balance,
    to_balance
) values %L RETURNING *;`

const insertTransfers = `
INSERT INTO transfers (
    
) values (
    
) ON CONFLICT () DO NOTHING
RETURNING *;
`;

const upsertTransfers = `
INSERT INTO transfers (
    
) values (
    
) ON CONFLICT () DO UPDATE SET (

) = (

)
RETURNING *;
`;

const setIntegerNowFunc = `
SELECT set_integer_now_func('transfers', 'current_time_ns');
SELECT set_integer_now_func('ledger_movements', 'current_time_ns');
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

const flushLedgerMovementsQueue = () => {

    clearInterval(ledgerMovementsIntervalId);

    while (ledgerMovementsQueue.length) {

        if (ledgerMovementsToInsert.length >= 100) {
            persistLedgerMovements(ledgerMovementsToInsert);
            while (ledgerMovementsToInsert.length) ledgerMovementsToInsert.shift();
        }

        const evt = ledgerMovementsQueue.shift();

        // Only format ledgerMovements fields that are not empty
        if (evt.ledgerMovements.ledgerMovements) {
            ledgerMovementsToInsert.push(...formatLedgerMovements(evt.ledgerMovements.ledgerMovements));
        }

    }

    if (ledgerMovementsToInsert.length > 0) {
        persistLedgerMovements(ledgerMovementsToInsert);
        while (ledgerMovementsToInsert.length) ledgerMovementsToInsert.shift();
    }

    ledgerMovementsIntervalId = setInterval(flushLedgerMovementsQueue, 50);

}

ledgerMovementsIntervalId = setInterval(flushLedgerMovementsQueue, 50);

const flushTransferUpdateQueue = () => {
    
    clearInterval(intervalId);

    while (posUpdateQueue.length) {
        
        const event = posUpdateQueue.shift();
        const height = event.id.split('-')[0];
        const eventIndex = event.id.split('-')[1];
        const block = recentBlocks.get(height);

        if (!block) {
            posUpdateQueue.unshift(event);
            break;
        }
        
        event.positionStateEvent["synthTimestamp"] = BigInt(block.timestamp) + BigInt(eventIndex);

        persistPositionStateUpdate(event.positionStateEvent);
        persistPositionState(event.positionStateEvent);

    }

    intervalId = setInterval(flushPosUpdateQueue, 50);

};

// intervalId = setInterval(flushPosUpdateQueue, 50);

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
        topic: "transfers",
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
    kafkaConsumer = new kafka.Consumer(kafkaClient, [{ topic: "blocks" },{ topic: "transfers" }], { groupId: "transfers-group" });
    kafkaConsumer.on("message", (msg) => {

        const dateTime = new Date(Date.now()).toISOString();
        // console.log(`${dateTime}: New message`);

        if (msg.topic == "blocks") {
            const evt = JSON.parse(msg.value);
            // console.log(evt);
            
            // if (evt.beginBlock) recentBlocks.push(evt.beginBlock);

        }

        if (msg.topic == "transfers") {
            
            const evt = JSON.parse(msg.value);
            // console.log(evt);
            // console.dir(evt, { depth: null });

            if (evt.transfer) {

            }

            if (evt.ledgerMovements) {

                ledgerMovementsQueue.push(evt)

            }

        }

    });
};

const formatLedgerMovements = (movements) => {

    const rows = [];

    for (let movement of movements) {
        for (let entry of movement.entries) {

            // Convert enums to field names
            entry.type = transferEnumMappings.type[entry.type];
            entry.fromAccount.type = transferEnumMappings.accountType[entry.fromAccount.type];
            entry.toAccount.type = transferEnumMappings.accountType[entry.toAccount.type];

            // Replace undefined fields to prevent nulls in the PRIMARY KEY of the table
            if (entry.fromAccount.owner == undefined) entry.fromAccount.owner = "network";
            if (entry.toAccount.owner == undefined) entry.toAccount.owner = "network";
            
            if (entry.fromAccount.marketId == undefined) entry.fromAccount.marketId = "N/A";
            if (entry.toAccount.marketId == undefined) entry.toAccount.marketId = "N/A";

            const row = [
                entry.fromAccount.assetId,
                entry.fromAccount.owner,
                entry.fromAccount.type,
                entry.fromAccount.marketId,
                entry.toAccount.assetId,
                entry.toAccount.owner,
                entry.toAccount.type,
                entry.toAccount.marketId,
                entry.amount,
                entry.type,
                entry.timestamp,
                entry.fromAccountBalance,
                entry.toAccountBalance
            ];

            rows.push(row);

        }
    }

    return rows;

}

const persistLedgerMovements = (rows) => {

    pgClient.query(format(fInsertLedgerMovements, rows), [], (err, res) => {
        if (!err) {
            
        } else {
            console.log(`Error performing inserts`);
            console.log(err);
        }
    });

}

const persistTransfers = (evt) => {

    // console.log(pos);

    const row = [

    ];

    pgPool.query(insertTransfer, row, (err, res) => {
        if (!err) {
            // console.dir(res, { depth: null });
        } else {
            console.log("Error inserting position.");
        }
    });

};


setTimeout(start, 38000);