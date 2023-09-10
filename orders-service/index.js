const { orderEnums, orderEnumMappings } = require('./order-enums.js');
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
let kafkaBlockConsumer;
let kafkaConsumer;

const { RecentBlocks } = require('./ringBuffers.js');

const orderQueue = [];
const toInsert = [];
const diffsToInsert = [];
const recentBlocks = new RecentBlocks(2000);
const orderBookMap = new Map();
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

CREATE TABLE IF NOT EXISTS order_book_diffs (
    id TEXT NOT NULL,
    market_id TEXT NOT NULL,
    side TEXT NOT NULL,
    price TEXT NOT NULL,
    size BIGINT,
    synth_timestamp BIGINT,
    PRIMARY KEY (synth_timestamp, id, price)
);

SELECT create_hypertable('order_updates', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
SELECT create_hypertable('orders', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
SELECT create_hypertable('order_book_diffs', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
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

const fInsertDiffs = `
INSERT INTO order_book_diffs (
    id,
    market_id,
    side,
    price,
    size,
    synth_timestamp
) values %L RETURNING *;
`

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
    // To create order snapshots we need to capture each change (diff) in the order books within
    // a particular time period. Order books can be expressed as an array of ( size, volume ) pairs
    
    order_book_diffs: {
        interval_1m: {
            createMatView: `
            CREATE METERIALIZED VIEW order_book_diffs_1m
            with (timescaledb.continuous) AS
            SELECT 
            
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

const flushOrderQueue = () => {
    clearInterval(flushOrderQueueInterval);

    // const startTime = performance.now();
    let orderCount = 0;

    while (orderQueue.length) {

        orderCount += 1;

        if (diffsToInsert.length >= 1000) {
            persistDiffs(diffsToInsert);
            diffsToInsert.length = 0;
            // while (diffsToInsert.length) diffsToInsert.shift();
        }

        if (toInsert.length >= 1000) {
            persistOrders(toInsert);
            toInsert.length = 0;
            // while (toInsert.length) toInsert.shift();
        }

        const event = orderQueue.shift();
        const height = event.id.split('-')[0];
        const eventIndex = event.id.split('-')[1];
        const block = recentBlocks.get(height);

        if (!block) {
            console.log(`Block not found for height: ${height}`);
            orderQueue.unshift(event);
            orderCount -= 1;
            break;
        }

        // Add distressedOrdersClosed events to account for positions closed by the network

        if (event.Event.ExpiredOrders) {

            const marketId = event.Event.ExpiredOrders.market_id;
            
            const synthTimestamp = BigInt(block.timestamp) + BigInt(eventIndex);

            for (let orderId of event.Event.ExpiredOrders.order_ids) {
                const diff = convertExpiredOrderToDiff(marketId, orderId, synthTimestamp);
                if (diff) diffsToInsert.push(diff);
            }

        }

        if (event.Event.Order) {

            event.Event.Order['synth_timestamp'] = BigInt(block.timestamp) + BigInt(eventIndex);

            const diffs = convertOrderToDiff(event.Event.Order);
            if (diffs) diffsToInsert.push(...diffs);

            toInsert.push(formatOrder(event.Event.Order));
            ordersFormatted += 1;

        }

    }

    if (diffsToInsert.length > 0) {
        persistDiffs(diffsToInsert);
        diffsToInsert.length = 0;
        // while(diffsToInsert.length) diffsToInsert.shift();
    }

    if (toInsert.length > 0) {
        persistOrders(toInsert);
        toInsert.length = 0;
        // while (toInsert.length) toInsert.shift();
    }

    // console.log(`${orderCount} orders processed in ${performance.now() - startTime}ms`);

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
                            // createContAggs(pgClient, ["openInterest", "pnls"]);
                            
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


const setConsumer = () => {

    const options = {
        kafkaHost: kafkaBrokers,
        groupId: 'orders-group',
        // encoding: 'buffer',
        fetchMaxBytes: 2 * 1024 * 1024
    };

    const kafkaConsumer = new kafka.ConsumerGroup(options, []);

    // let startTime = performance.now();
    // let msgCount = 0;

    kafkaConsumer.on('message', (msg) => {
        // msgCount++;
        // if (msgCount % 1000 == 0) {
        //     console.log(`Time to poll 1000 messages: ${performance.now() - startTime}`);
        //     startTime = performance.now();
        // }
        const evt = JSON.parse(msg.value);
        if (msg.topic == "blocks") {
            // console.log(msg);
            if (evt.Event.BeginBlock) recentBlocks.push(evt.Event.BeginBlock);
        }
        if (msg.topic == "orders") {
            if (evt.Event.BeginBlock) {
                recentBlocks.push(evt.Event.BeginBlock);
            }
            if (evt.Event.Order) {
                // console.log(evt);
                orderQueue.push(evt);
            }
            if (evt.Event.ExpiredOrders) {
                // console.log(evt);
                orderQueue.push(evt);
            }
            if (evt.Event.DistressedOrdersClosed) {
                console.log(evt);
            }
        }
    });
    kafkaConsumer.addTopics([{ topic: 'orders', offset: 0 }], () => console.log("topic added"));
};

// const setConsumer = (kafkaConsumer) => {
//     // kafkaBlockConsumer = new kafka.Consumer(kafkaClient, [ { topic: "blocks" } ], { groupId: "orders-blocks-group" });
//     kafkaConsumer = new kafka.Consumer(kafkaClient, [ { topic: "orders" }, { topic: "blocks" } ], { groupId: "orders-group", fetchMaxBytes: 2 * 1024 * 1024 });
//     kafkaConsumer.on("message", (msg) => {

//         const dateTime = new Date(Date.now()).toISOString();
//         // console.log(`${dateTime}: New message`);
//         const evt = JSON.parse(msg.value);

//         // if (!evt.Event.Order) {
//         //     console.dir(evt, { depth: null });
//         // }

//         if (msg.topic == "blocks") {
//             if (evt.Event.BeginBlock) recentBlocks.push(evt.Event.BeginBlock);
//         }

//         if (msg.topic == "orders") {

//             if (evt.Event.Order) {
//                 // console.log(evt);
//                 orderQueue.push(evt);
//             }

//             if (evt.Event.ExpiredOrders) {
//                 // console.log(evt);
//                 orderQueue.push(evt);
//             }

//             if (evt.Event.DistressedOrdersClosed) {
//                 console.log(evt);
//             }

//         }
        
//     });
// };

const formatOrder = (order) => {

    // Convert enums into their text values
    order.side = orderEnumMappings.side[order.side];
    order.type = orderEnumMappings.type[order.type];
    order.status = orderEnumMappings.status[order.status];

    // Convert to array format
    const formatted = [
        order.id, order.market_id, order.party_id, order.side, order.price, order.size, order.remaining,
        order.type, order.created_at, order.synth_timestamp, order.status, order.version
    ];

    // Set undefined types for when order is stopped
    if (order.status == orderEnumMappings.status[orderEnums.status.STATUS_STOPPED]) {
        formatted[5] = "0";
        formatted[6] = "0";
        formatted[7] = "N/A";
        formatted[11] = "0";
    }

    return formatted;

}

const convertOrderToDiff = (order) => {

    if (!orderBookMap.get(order.id)) {

        if (order.status == orderEnums.status.STATUS_ACTIVE) {
            
            orderBookMap.set(order.id, {
                id: order.id,
                marketId: order.market_id,
                side: order.side,
                price: order.price,
                size: order.size,
                synthTimestamp: order.synth_timestamp,
                active: true
            })
    
            return [ [
                order.id,
                order.market_id,
                order.side,
                order.price,
                order.size,
                order.synth_timestamp
            ] ];

        } else {
            return null;
        }

    } else {

        if (order.status == orderEnums.status.STATUS_ACTIVE) {
            const details = orderBookMap.get(order.id);
            
            // Check for orders changing from inactive to active
            if (!details.active) {
                orderBookMap.set(order.id, {
                    id: order.id,
                    marketId: order.market_id,
                    side: order.side,
                    price: order.price,
                    size: order.size,
                    synthTimestamp: order.synth_timestamp,
                    active: true
                })

                return [ [
                    order.id,
                    order.market_id,
                    order.side,
                    order.price,
                    order.size,
                    order.synth_timestamp
                ] ];
            }

            // Check for ammendment
            if (order.version > 1) {

                // If price has changed then generate diffs for both prices
                if (order.price != details.price) {

                    const diff1 = [
                        details.id,
                        details.marketId,
                        details.side,
                        details.price,
                        0n - BigInt(details.size),
                        order.synth_timestamp
                    ]

                    const diff2 = [
                        order.id,
                        order.market_id,
                        order.side,
                        order.price,
                        order.remaining,
                        order.synth_timestamp
                    ]

                    return [ diff1, diff2 ];

                }

                // If size has changed then generate diff
                if (order.remaining != details.size) {

                    const diff = [
                        order.id,
                        order.market_id,
                        order.side,
                        order.price,
                        BigInt(order.remaining) - BigInt(details.size),
                        order.synth_timestamp
                    ];

                    return [ diff ];
                }

            }

            // Check for partial fill
            if (order.remaining != details.size) {

                const diff = [
                    order.id,
                    order.market_id,
                    order.side,
                    order.price,
                    BigInt(order.remaining) - BigInt(details.size),
                    order.synth_timestamp
                ];

                orderBookMap.set(order.id.valueOf(), {
                    id: order.id,
                    marketId: order.market_id,
                    side: order.side,
                    price: order.price,
                    size: order.remaining,
                    synthTimestamp: order.synth_timestamp,
                    active: true
                });

                return [ diff ];
            }

        }


        // Check for cancellation, generate diff for cancelled amount
        if (order.status == orderEnums.status.STATUS_CANCELLED) {
            const details = orderBookMap.get(order.id);

            // Generate diff using remaining size
            const diff = [
                details.id,
                details.marketId,
                details.side,
                details.price,
                0n - BigInt(details.size),
                order.synth_timestamp
            ]

            // Delete entry in order book map
            orderBookMap.delete(order.id);

            return [ diff ];

        }

        // Check for parked
        if (order.status == orderEnums.status.STATUS_PARKED) {

            // Mark order as inactive
            const details = orderBookMap.get(order.id);
            details.active = false;

            // Generate diffs
            const diff = [
                details.id,
                details.marketId,
                details.side,
                details.price,
                0n - BigInt(details.size),
                order.synth_timestamp
            ];

            return [ diff ];

        }

    }

}

const convertExpiredOrderToDiff = (marketId, orderId, synthTimestamp) => {

    // For each expired order, create it's diff then remove it from the map
    const details = orderBookMap.get(orderId);

    const diff = [
        orderId,
        marketId,
        details.side.valueOf(),
        details.price.valueOf(),
        0n - BigInt(details.size),
        synthTimestamp
    ];

    orderBookMap.delete(orderId);

    return diff

}

const persistOrder = (item) => {

    pgClient.query(insertOrderUpdate, item, (err, res) => {
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

    // const startTime = performance.now();
    const numItems = items.length;

    const formatted = format(fInsertOrderUpdate, items);
    // console.log(`Took ${performance.now() - startTime}ms to formate ${numItems} order updates.`)

    pgPool.query(formatted, [], (err, res) => {
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

    pgPool.query(formatted, [], (err, res) => {
        if (!err) {
            // console.log("Diff insertions successful");
            // console.log(`Took ${performance.now() - startTime}ms to insert ${numDiffs} orderbook diffs`);
        } else {
            console.log(`Error performing inserts: `, err);
        }
    })

}



setTimeout(start, 39000);