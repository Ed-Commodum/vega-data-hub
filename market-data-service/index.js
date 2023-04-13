const { marketState, marketTradingMode } = require('./market-enums.js');
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
                first(first, bucket) - last(last, bucket) AS diff,
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
                first(first, bucket) - last(last, bucket) AS diff,
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
    kafkaConsumer = new kafka.Consumer(kafkaClient, [{ topic: "market_data" }]);
    kafkaConsumer.on("message", (msg) => {

        const dateTime = new Date(Date.now()).toISOString();
        console.log(`${dateTime}: New message`);

        const evt = JSON.parse(msg.value);
        // console.log(evt);

        // Ignore events from markets with state that is not active or suspended.
        if (evt.marketData.marketState == marketState.STATE_ACTIVE || evt.marketData.marketState == marketState.STATE_SUSPENDED) {
            persistMarketData(formatMarketData(evt.marketData));
        }
        
    });
};

formatMarketData = (item) => {

    console.log(item);

    const formatted = [
        item.market, item.markPrice, item.bestBidPrice, item.bestBidVolume, item.bestOfferPrice,
        item.bestOfferVolume, item.midPrice, BigInt(item.timestamp), item.openInterest, item.lastTradedPrice
    ];

    console.log(formatted);

    return formatted;

}

persistMarketData = (item) => {

    pgPool.query(insertMarketDataUpdate, item, (err, res) => {
        if(err) {
            console.log("Error performing insert of market data update");
            console.log(err);
        } else {
            console.log("Insert successful");
        };
    });

}



setTimeout(start, 38000);