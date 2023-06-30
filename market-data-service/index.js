const { marketState, marketTradingMode } = require('./market-enums.js');
const { Client, Pool } = require('pg');
const format = require('pg-format');

const pgClient = new Client({
    host: process.env.TIMESCALEDB_HOST,
    port: process.env.TIMESCALEDB_PORT,
    database: 'postgres',
    user: 'postgres',
    password: 'ilovetimescaledb'
});

// const pgPool = new Pool({
//     host: process.env.TIMESCALEDB_HOST,
//     port: process.env.TIMESCALEDB_PORT,
//     database: 'postgres',
//     user: 'postgres',
//     password: 'ilovetimescaledb'
// });


const kafka = require("kafka-node");

// const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");
const kafkaBrokers = process.env.KAFKA_BROKERS;

console.log(process.env);

const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
// const kafkaProducer = new kafka.Producer(kafkaClient);
// const kafkaAdmin = new kafka.Admin(kafkaClient);
let kafkaConsumer;
const formattedBatch = [];
const flushFormattedBatchInterval = setInterval(() => {
    if (formattedBatch.length == 0) return;
    batchPersistMarketData(formattedBatch.slice());
    formattedBatch.length = 0;
}, 100);

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS market_data_updates (
    market_id TEXT NOT NULL,
    mark_price NUMERIC,
    best_bid_price NUMERIC,
    best_bid_volume NUMERIC,
    best_ask_price NUMERIC,
    best_ask_volume NUMERIC,
    mid_price NUMERIC,
    timestamp BIGINT,
    open_interest NUMERIC,
    last_traded_price NUMERIC,
    PRIMARY KEY (market_id, timestamp)
);

SELECT create_hypertable('market_data_updates', 'timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
`

// CREATE TABLE IF NOT EXISTS open_interest_updates (
//     market_id TEXT NOT NULL,
//     open_interest BIGINT,
//     timestamp BIGINT,
//     PRIMARY KEY (market_id, timestamp)
// );

// SELECT create_hypertable('open_interest_updates', 'timestamp', chunk_time_interval => '604800000000000'::BIGINT);
// `;

const insertMarketDataUpdate = `
INSERT INTO market_data_updates (
    market_id,
    mark_price,
    best_bid_price,
    best_bid_volume,
    best_ask_price,
    best_ask_volume,
    mid_price,
    timestamp,
    open_interest,
    last_traded_price
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
    $10
) RETURNING *;
`;

const fInsertMarketDataUpdates = `
INSERT INTO market_data_updates (
    market_id,
    mark_price,
    best_bid_price,
    best_bid_volume,
    best_ask_price,
    best_ask_volume,
    mid_price,
    timestamp,
    open_interest,
    last_traded_price
) values %L RETURNING *;`

const setIntegerNowFunc = `
SELECT set_integer_now_func('market_data_updates', 'current_time_ns');
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
                last(last_traded_price, timestamp) AS last_traded_price,
                last(timestamp, timestamp) AS last_ts,
                max(timestamp) AS max_ts,
                max(open_interest) AS high,
                min(open_interest) AS low,
                last(open_interest, timestamp) - first(open_interest, timestamp) AS diff,
                avg(open_interest) AS avg,
                count(timestamp) AS num_updates
            FROM market_data_updates
            GROUP BY market_id, time_bucket(300000000000, timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('open_interest_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');
            `
        },
        interval_1h: {
            createMatView: `CREATE MATERIALIZED VIEW open_interest_1h
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(3600000000000, bucket) AS bucket,
                first(first, bucket) AS first,
                first(first_ts, bucket) AS first_ts,
                last(last, bucket) AS last,
                last(last_ts, bucket) AS last_ts,
                max(high) AS high,
                min(low) AS low,
                last(last, bucket) - first(first, bucket) AS diff,
                sum(avg * num_updates) / sum(num_updates) AS avg,
                sum(num_updates) AS num_updates
            FROM open_interest_5m
            GROUP BY market_id, time_bucket(3600000000000, bucket);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('open_interest_1h',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');
            `
        },
        interval_1d: {
            createMatView: `CREATE MATERIALIZED VIEW open_interest_1d
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(86400000000000, bucket) AS bucket,
                first(first, bucket) AS first,
                first(first_ts, bucket) AS first_ts,
                last(last, bucket) AS last,
                last(last_ts, bucket) AS last_ts,
                max(high) AS high,
                min(low) AS low,
                last(last, bucket) - first(first, bucket) AS diff,
                sum(avg * num_updates) / sum(num_updates) AS avg,
                sum(num_updates) num_updates
            FROM open_interest_1h
            GROUP BY market_id, time_bucket(86400000000000, bucket);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('open_interest_1d',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');
            `
        }
    },
    bidAskSpread: {
        // interval_500ms: {
        //     createMatView: `CREATE MATERIALIZED VIEW bid_ask_spread_500ms
        //     WITH (timescaledb.continuous) AS 
        //     SELECT market_id,
        //         time_bucket(500000000, timestamp) as bucket,
                
        //     `,
        //     addRefreshPolicy:`
        //     `
        // },
        interval_5m: {
            createMatview: `CREATE MATERIALIZED VIEW bid_ask_spread_5m
            WITH (timescaledb.continuous) AS 
            SELECT market_id,
                time_bucket(300000000000, timestamp) as bucket,
                min(best_ask_price - best_bid_price) as min_abs,
                min((best_ask_price - best_bid_price) / best_ask_price) as min_percent,
                max(best_ask_price - best_bid_price) as max_abs,
                max((best_ask_price - best_bid_price) / best_ask_price) as max_percent,
                first(best_ask_price - best_bid_price, timestamp) as first_abs,
                first((best_ask_price - best_bid_price) / best_ask_price, timestamp) as first_percent,
                last(best_ask_price - best_bid_price, timestamp) as last_abs,
                last((best_ask_price - best_bid_price) / best_ask_price, timestamp) as last_percent,
                avg(best_ask_price - best_bid_price) as average_abs,
                avg((best_ask_price - best_bid_price) / best_ask_price) as average_percent
                FROM market_data_updates
                GROUP BY market_id, time_bucket(300000000000, timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('bid_ask_spread_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');
            `
        },
        // interval_1h: {
        //     createMatview: `CREATE MATERIALIZED VIEW bid_ask_spread_1h
        //     WITH (timescaledb.continuous) AS 
        //     SELECT market_id,
        //         time_bucket(3600000000000, timestamp) as bucket,
        //         min(best_ask_price - best_bid_price) as min_abs,
        //         min((best_ask_price - best_bid_price) / best_ask_price) as min_percent,
        //         max(best_ask_price - best_bid_price) as max_abs,
        //         max((best_ask_price - best_bid_price) / best_ask_price) as max_percent,
        //         first(best_ask_price - best_bid_price) as first_abs,
        //         first((best_ask_price - best_bid_price) / best_ask_price) as first_percent,
        //         last(best_ask_price - best_bid_price) as last_abs,
        //         last((best_ask_price - best_bid_price) / best_ask_price) as last_percent,
        //         avg(best_ask_price - best_bid_price) as average_abs,
        //         avg((best_ask_price - best_bid_price) / best_ask_price) as average_percent
        //         FROM market_data_updates
        //         GROUP BY market_id, time_bucket(3600000000000, timestamp);
        //     `,
        //     addRefreshPolicy: `SELECT add_continuous_aggregate_policy('bid_ask_spread_1h',
        //     start_offset => '2592000000000000'::bigint,
        //     end_offset => '60000000000'::bigint,
        //     schedule_interval => INTERVAL '1 minute');
        //     `
        // }
    },
    candles: {
        interval_5m: {

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



const start = () => {

    // Connect to Kafka.
    const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
    const kafkaAdmin = new kafka.Admin(kafkaClient);

    // // Connect to postgres.
    // pgClient.connect((err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    // });

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
                            createContAggs(pgClient, ["openInterest"]); //, "bidAskSpread"]);
                            
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
        topic: "market_data_updates",
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
    kafkaConsumer = new kafka.Consumer(kafkaClient, [], { groupId: `market-data-group-00`, fromOffset: true }); //groupId: "market-data-group"
    let counter = 0;
    kafkaConsumer.on("message", (msg) => {
        // const dateTime = new Date(Date.now()).toISOString();
        // console.log(`${dateTime}: New message`);

        if (counter < 10) {
            console.log(msg.offset);
            counter++
        };

        const evt = JSON.parse(msg.value);
        // console.log(evt);
        if (evt.Event.MarketData) {
            // Ignore events from markets with state that is not active or suspended.
            // if (evt.Event.MarketData.market_state == marketState.STATE_ACTIVE || evt.Event.MarketData.market_state == marketState.STATE_SUSPENDED) {
            //     persistMarketData(formatMarketData(evt.Event.MarketData));
            // }
            if (evt.Event.MarketData.market_state == marketState.STATE_ACTIVE || evt.Event.MarketData.market_state == marketState.STATE_SUSPENDED) {
                formattedBatch.push(formatMarketData(evt.Event.MarketData));
                if (formattedBatch.length >= 300) {
                    batchPersistMarketData(formattedBatch.slice());
                    formattedBatch.length = 0;
                }
            }
        }
        
    });
    kafkaConsumer.addTopics([{ topic: 'market_data', offset: 0 }], () => console.log("topic added"));
};

formatMarketData = (item) => {

    // console.log(item);

    const formatted = [
        item.market, item.mark_price, item.best_bid_price, item.best_bid_volume, item.best_offer_price,
        item.best_offer_volume, item.mid_price, BigInt(item.timestamp), item.open_interest, item.last_traded_price
    ];

    // console.log(formatted);

    return formatted;

}

batchPersistMarketData = (rows) => {

    pgClient.query(format(fInsertMarketDataUpdates, rows), [], (err, res) => {
        if (!err) {
            
        } else {
            console.log(`Error performing inserts`);
            console.log(err);
        }
    });

}

persistMarketData = (item) => {

    pgClient.query(insertMarketDataUpdate, item, (err, res) => {
        if(!err) {
            
        } else {
            console.log("Error performing insert of market data update");
            console.log(err);
        };
    });

}



setTimeout(start, 38000);