const { orderEnumMappings } = require('./order-enums.js');
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

const { RecentBlocks } = require('./ringBuffers.js');

const orderQueue = [];
const recentBlocks = new RecentBlocks(500);
let flushOrderQueueInterval

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS order_updates (
    id TEXT NOT NULL,
    market_id TEXT NOT NULL,
    party_id TEXT NOT NULL,
    side TEXT NOT NULL,
    price NUMERIC,
    size NUMERIC,
    remaining NUMERIC,
    type TEXT NOT NULL,
    created_at BIGINT,
    synth_timestamp BIGINT,
    status TEXT NOT NULL,
    version INTEGER,
    PRIMARY KEY (id, synth_timestamp, version)
);

CREATE TABLE IF NOT EXISTS orders (
    id TEXT NOT NULL,
    synth_timestamp BIGINT
);

SELECT create_hypertable('order_updates', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
SELECT create_hypertable('orders', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
`

const insertOrderUpdate = `
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
    $12
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

const upsertOrder = `
INSERT INTO order_updates (
    
) values (
    
) RETURNING *;
`;


const setIntegerNowFunc = `
SELECT set_integer_now_func('order_updates', 'current_time_ns');
SELECT set_integer_now_func('orders', 'current_time_ns');
`;

const continuousAggregates = {
    openInterest: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW open_interest_5m
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(300000000000, timestamp) AS bucket,
                first(open_interest, timestamp) AS first,
                first(timestamp, timestamp) AS first_ts,
                last(open_interest, timestamp) AS last,
                last(timestamp, timestamp) AS last_ts,
                first(open_interest, timestamp) - last(open_interest, timestamp) AS diff,
                avg(open_interest) AS avg,
                count(timestamp) AS num_updates
            FROM open_interest_updates
            GROUP BY market_id, time_bucket(300000000000, timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('open_interest_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');
            `
        }
    },
    candles: {
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

// const flushOrderQueue = () => {
//     clearInterval(flushOrderQueueInterval);

//     while (orderQueue.length) {

//         const event = orderQueue.shift();
//         const height = event.id.split('-')[0];
//         const eventIndex = event.id.split('-')[1];
//         const block = recentBlocks.get(height);

//         if (!block) {
//             posUpdateQueue.unshift(event);
//             break;
//         }
        
//         event.order['synthTimestamp'] = BigInt(block.timestamp) + BigInt(eventIndex);

//         persistOrder(formatOrder(event.order));

//     }

//     flushOrderQueueInterval = setInterval(flushOrderQueue, 50);
// };

let ordersFormatted = 0;
let rowsForInsertion = 0;
const toInsert = [];

const flushOrderQueue = () => {
    clearInterval(flushOrderQueueInterval);

    while (orderQueue.length) {

        if (toInsert.length >= 100) {
            persistOrders(toInsert);
            while (toInsert.length) toInsert.shift();
        }

        const event = orderQueue.shift();
        const height = event.id.split('-')[0];
        const eventIndex = event.id.split('-')[1];
        const block = recentBlocks.get(height);

        if (!block) {
            posUpdateQueue.unshift(event);
            break;
        }
        
        event.order['synthTimestamp'] = BigInt(block.timestamp) + BigInt(eventIndex);

        toInsert.push(formatOrder(event.order));
        ordersFormatted += 1;

    }

    if (toInsert.length > 0) {
        persistOrders(toInsert);
        while (toInsert.length) toInsert.shift();
    }

    flushOrderQueueInterval = setInterval(flushOrderQueue, 50);
};

flushOrderQueueInterval = setInterval(flushOrderQueue, 50);

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
                            // createContAggs(pgPool, ["openInterest", "pnls"]);
                            
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
        topic: "orders",
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
    kafkaConsumer = new kafka.Consumer(kafkaClient, [ { topic: "orders" }, { topic: "blocks" } ], { groupId: "orders-group" });
    kafkaConsumer.on("message", (msg) => {

        const dateTime = new Date(Date.now()).toISOString();
        // console.log(`${dateTime}: New message`);
        const evt = JSON.parse(msg.value);

        // if (!evt.order) {
        //     console.dir(evt, { depth: null });
        // }

        if (msg.topic == "blocks") {
            if (evt.beginBlock) recentBlocks.push(evt.beginBlock);
        }

        if (msg.topic == "orders") {
            if (evt.order) {
                // console.log(evt);
                // persistOrder(formatOrder(evt.order));
                orderQueue.push(evt);
            }
        }
        
    });
};

const formatOrder = (order) => {

    // Convert enums into their text values
    order.side = orderEnumMappings.side[order.side];
    order.type = orderEnumMappings.type[order.type];
    order.status = orderEnumMappings.status[order.status];

    // Convert to array format
    const formatted = [
        order.id, order.marketId, order.partyId, order.side, order.price, order.size, order.remaining,
        order.type, order.createdAt, order.synthTimestamp, order.status, order.version
    ];

    // Set undefined types for when order is stopped
    if (order.status == "STATUS_STOPPED") {
        formatted[5] = "0";
        formatted[6] = "0";
        formatted[7] = "N/A";
        formatted[11] = "0";
    }

    return formatted;

}

const persistOrder = (item) => {

    pgPool.query(insertOrderUpdate, item, (err, res) => {
        if(err) {
            console.log("Error performing insert of order update");
            console.log(err);
            console.log(item);
        } else {
            console.log("Insert successful");
        };
    });

}

const persistOrders = (items) => {

    pgClient.query(format(fInsertOrderUpdate, items), [], (err, res) => {
        if (err) {
            console.log(`Error performing inserts`);
            console.log(err);
        } else {
            
        }
    });

    rowsForInsertion += items.length;
    console.log(`Total rows sent for insetion: ${rowsForInsertion}`);
    console.log(`Total orders formatted: ${ordersFormatted}`);

}



setTimeout(start, 38000);