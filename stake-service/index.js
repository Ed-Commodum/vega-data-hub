const { stakeLinkingEnums, stakeLinkingEnumMappings } = require('./stakeLinkingEnums.js');
const { Client, Pool } = require('pg');
const format = require('pg-format');
const { performance } = require('node:perf_hooks');

const pgClient = new Client({
    host: process.env.TIMESCALEDB_HOST,
    port: process.env.TIMESCALEDB_PORT,
    database: 'postgres',
    user: 'postgres',
    password: 'ilovetimescaledb'
});

const kafka = require("kafka-node");

const kafkaBrokers = process.env.KAFKA_BROKERS;

console.log(process.env);

const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
// const kafkaProducer = new kafka.Producer(kafkaClient);
// const kafkaAdmin = new kafka.Admin(kafkaClient);
let kafkaBlockConsumer;
let kafkaConsumer;

// const { RecentBlocks } = require('./ringBuffers.js');

const orderQueue = [];
const toInsert = [];
const diffsToInsert = [];
// const recentBlocks = new RecentBlocks(2000);
const orderBookMap = new Map();
let flushOrderQueueInterval

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS stake_linkings (
    id TEXT NOT NULL,
    type TEXT NOT NULL,
    ts BIGINT NOT NULL,
    finalized_timestamp BIGINT,
    party_id TEXT NOT NULL,
    amount NUMERIC(40),
    status TEXT NOT NULL,
    eth_addr TEXT NOT NULL,
    PRIMARY KEY (ts, id)
);


SELECT create_hypertable('stake_linkings', 'ts', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
`

const insertStakeLinking = `
INSERT INTO stake_linkings (
    id,
    type,
    ts,
    finalized_timestamp,
    party_id,
    amount,
    status,
    eth_addr
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8
) RETURNING *;
`;

const upsertStakeLinking = `
INSERT INTO stake_linkings (
    id,
    type,
    ts,
    finalized_timestamp,
    party_id,
    amount,
    status,
    eth_addr
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8
) ON CONFLICT (ts, id) DO UPDATE SET (
    id,
    type,
    ts,
    finalized_timestamp,
    party_id,
    amount,
    status,
    eth_addr
) = (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8
) RETURNING *;
`;

const fInsertOrderUpdate = `
INSERT INTO order_updates (
    id,
    market_id,
    party_id,
    side,
    price,
    size,
    remaining,
    type,
    created_at,
    synth_timestamp,
    status,
    version
) values %L RETURNING *;`


const setIntegerNowFunc = `
SELECT set_integer_now_func('stake_linkings', 'current_time_ns');
`;

const continuousAggregates = {
    // To create order snapshots we need to capture each change (diff) in the order books within
    // a particular time period. Order books can be expressed as an array of ( size, volume ) pairs
    
    stake_linking_diffs: {
        interval_5m: {
            createMatView: `
            CREATE MATERIALIZED VIEW stake_linking_diffs_5m
            with (timescaledb.continuous) AS
            SELECT
                time_bucket('300000000000'::bigint, ts) AS bucket,
                max(ts) AS ts,
                party_id,
                eth_addr,
                sum(CASE WHEN type = 'TYPE_LINK' THEN amount END) AS staked,
                sum(CASE WHEN type = 'TYPE_UNLINK' THEN amount END) AS unstaked,
                sum(CASE
                        WHEN type = 'TYPE_LINK' THEN amount
                        WHEN type = 'TYPE_UNLINK' THEN -amount
                    END) AS diff
            FROM stake_linkings
            WHERE status = 'STATUS_ACCEPTED'
            GROUP BY party_id, time_bucket('300000000000'::bigint, ts), eth_addr;
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('stake_linking_diffs_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        },
        interval_1h: { 
            createMatView: `
            CREATE MATERIALIZED VIEW stake_linking_diffs_1h
            with (timescaledb.continuous) AS
            SELECT
                time_bucket('3600000000000'::bigint, ts) AS bucket,
                max(ts) AS ts,
                party_id,
                eth_addr,
                sum(CASE WHEN type = 'TYPE_LINK' THEN amount END) AS staked,
                sum(CASE WHEN type = 'TYPE_UNLINK' THEN amount END) AS unstaked,
                sum(CASE
                        WHEN type = 'TYPE_LINK' THEN amount
                        WHEN type = 'TYPE_UNLINK' THEN -amount
                    END) AS diff
            FROM stake_linkings
            WHERE status = 'STATUS_ACCEPTED'
            GROUP BY party_id, time_bucket('3600000000000'::bigint, ts), eth_addr;
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('stake_linking_diffs_1h',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`

        },
        interval_1d: {
            crateMatView: `
            CREATE MATERIALIZED VIEW stake_linking_diffs_1d
            with (timescaledb.continuous) AS
            SELECT
                time_bucket('86400000000000'::bigint, ts) AS bucket,
                max(ts) AS ts,
                party_id,
                eth_addr,
                sum(CASE WHEN type = 'TYPE_LINK' THEN amount END) AS staked,
                sum(CASE WHEN type = 'TYPE_UNLINK' THEN amount END) AS unstaked,
                sum(CASE
                        WHEN type = 'TYPE_LINK' THEN amount
                        WHEN type = 'TYPE_UNLINK' THEN -amount
                    END) AS diff
            FROM stake_linkings
            WHERE status = 'STATUS_ACCEPTED'
            GROUP BY party_id, time_bucket('86400000000000'::bigint, ts), eth_addr;
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('stake_linking_diffs_1d',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
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

const start = () => {

    // Connect to Kafka.
    const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
    const kafkaAdmin = new kafka.Admin(kafkaClient);

    // Connect to postgres.
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
                            createContAggs(pgClient, ['stake_linking_diffs']);
                            
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
        topic: "stake_linkings",
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


const setConsumer = () => {

    const options = {
        kafkaHost: kafkaBrokers,
        groupId: 'stake-linkings-group',
        // encoding: 'buffer',
        fetchMaxBytes: 2 * 1024 * 1024
    };

    const kafkaConsumer = new kafka.Consumer(kafkaClient, [], { groupId: 'stake-group-10' });

    kafkaConsumer.on('message', (msg) => {
        const evt = JSON.parse(msg.value);

        if (msg.topic == "stake_linkings") {
            if (evt.Event.BeginBlock) {
                // recentBlocks.push(evt.Event.BeginBlock);
            }
            if (evt.Event.StakeLinking) {
                console.log(evt);
                persistStakeLinking(formatStakeLinking(evt.Event.StakeLinking));
            }
        }
    });
    kafkaConsumer.addTopics([{ topic: 'stake_linkings', offset: 0 }], () => console.log("topic added"));
};

const formatStakeLinking = (stakeLinking) => {

    console.log("Formatting...");
    console.log(stakeLinking);

    // Convert enums into their text values
    stakeLinking.type = stakeLinkingEnumMappings.type[stakeLinking.type];
    stakeLinking.status = stakeLinkingEnumMappings.status[stakeLinking.status];

    // Convert ts to nanos for hypertable time index
    stakeLinking.ts = (BigInt(stakeLinking.ts) * 1000000000n).toString()

    const formatted = [
        stakeLinking.id, stakeLinking.type, stakeLinking.ts, stakeLinking.finalized_timestamp,
        stakeLinking.party, stakeLinking.amount, stakeLinking.status, stakeLinking.ethereum_address
    ];

    return formatted;
};

const persistStakeLinking = (item) => {

    pgClient.query(upsertStakeLinking, item, (err, res) => {
        if (err) {
            console.log("Error performing upsert for stake linking.");
            console.log(err);
            console.log(item);
        } else {

        }
    });

}

const persistOrders = (items) => {

    // const startTime = performance.now();
    const numItems = items.length;

    const formatted = format(fInsertOrderUpdate, items);
    // console.log(`Took ${performance.now() - startTime}ms to formate ${numItems} order updates.`)

    pgClient.query(formatted, [], (err, res) => {
        if (err) {
            console.log(`Error performing inserts`);
            console.log(err);
        } else {
            // console.log(`Took ${performance.now() - startTime}ms to insert ${numItems} order updates`);
            // console.log("Order Insertions successful");
        }
    });

    // rowsForInsertion += items.length;
    // console.log(`Total rows sent for insetion: ${rowsForInsertion}`);
    // console.log(`Total orders formatted: ${ordersFormatted}`);

}

const persistDiffs = (diffs) => {

    // const startTime = performance.now();
    const numDiffs = diffs.length;

    const formatted = format(fInsertDiffs, diffs);
    // console.log(`Took ${performance.now() - startTime}ms to formate ${numDiffs} diffs.`)

    pgClient.query(formatted, [], (err, res) => {
        if (!err) {
            // console.log("Diff insertions successful");
            // console.log(`Took ${performance.now() - startTime}ms to insert ${numDiffs} orderbook diffs`);
        } else {
            console.log(`Error performing inserts: `, err);
        }
    })

}



setTimeout(start, 34000);