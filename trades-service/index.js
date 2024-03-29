// Process for the trades service:
//  - Connect to kafka broker.
//  - Connect to db.
//  - Set up window functions and continuous aggregates on db for computations.
//  - Create "trades" topic if not already exists.
//  - Read trades from the "trades" topic.
//  - Save trades to db.

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
const { EventEmitter } = require("node:events");
const { performance } = require("node:perf_hooks");

const { tradeAggressorMappings, tradeTypeMappings } = require('./type-mappings.js');
const { topicBusEventMappings } = require('./busEventTopicMappings.js');

// const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");
const kafkaBrokers = process.env.KAFKA_BROKERS;

console.log(kafkaBrokers);
console.log(process.env);

let kafkaConsumer;
let kafkaProducer;

const formattedBatch = [];
const flushFormattedBatchInterval = setInterval(() => {
    if (formattedBatch.length == 0 || formattedBatch.length == 1) return;
    batchPersistTrades(formattedBatch.slice());
    formattedBatch.length = 0;
}, 200);

const intervalMap = {
    interval_5m: 300000000000n,
    interval_1h: 3600000000000n,
    interval_1d: 86400000000000n
};

const bucketIndices = {
    interval_5m: 0n,
    interval_1h: 0n,
    interval_1d: 0n
};

// const replaying = true;
const replaying = false;
const busEventBlockMap = {};
const blockEmitter = new EventEmitter();

blockEmitter.on('noTrades', async (height) => {
    
    console.log(`No trades for height ${height}`);
    
    // Fire off event to notify API service that the block has no trades.
    // const host = process.env.API_SERVICE_MAINNET_SERVICE_HOST;
    // const port = process.env.API_SERVICE_MAINNET_SERVICE_PORT_BLOCK_NOTIFICATIONS;

    // console.log(host);
    // console.log(port);

    // const url = `http://${host}:${port}/block-notification`;
    // const headers = { "Content-Type": "application/json" };
    // const msg = `{ "topic": "trades", "height": ${height}, "status": "success" }`;
    // const res = await fetch(url, { method: 'POST', headers: headers, body: msg })
    //     .then(res => console.log(res.json))
    //     .catch(err => console.log(err));
    // console.log(res);
    // console.log(res.ok);
    // console.log(await res.json());

    const msgValue = `{ "topic": "trades", "height": ${height}, "status": "success" }`;

    // const payload = { topic: 'persistence_status', messages: [ { value: Buffer.from(`{ topic: "trades", height: ${height}, status: "success" }`) } ] };
    const payload = { topic: 'persistence_status', messages: [msgValue] };

    kafkaProducer.send([payload], (err, result) => {
        if (!err) {
            console.log(result);
        } else {
            console.log(err);
        }
    });

})

blockEmitter.on('successfulInserts', (height) => {

    console.log(`Successfully inserted block with height: ${height}`);

    // Fire off event that triggers API serice to send off data for that particular height.
    // Should the event be launched into Kafka for it to handle or would it be wise to build
    // and API/RPC on the websocket API service that this service can call directly?

    const msgValue = `{ "topic": "trades", "height": ${height}, "status": "success" }`;

    // const payload = { topic: 'persistence_status', messages: [ { value: Buffer.from(`{ topic: "trades", height: ${height}, status: "success" }`) } ] };
    const payload = { topic: 'persistence_status', messages: [msgValue] };

    kafkaProducer.send([payload], (err, result) => {
        if (!err) {
            console.log(result);
        } else {
            console.log(err);
        }
    });

});

blockEmitter.on('failedInserts', (height) => {
    
    console.log(`Failed to insert trades at height: ${height}`);

    // What should the workflow be for this?
    //
    //  - Retry inserts
    //  - Send event to websocket API to notify of failure.

    const msgValue = `{ "topic": "trades", "height": ${height}, "status": "failure" }`;

    // const payload = { topic: 'persistence_status', messages: [ { value: Buffer.from(`{ topic: "trades", height: ${height}, status: "failure" }`) } ] };
    const payload = { topic: 'persistence_status', messages: [msgValue] };

    kafkaProducer.send([payload], (err, result) => {
        if (!err) {
            console.log(result);
        } else {
            console.log(err);
        }
    });

});

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS trades (
    id TEXT NOT NULL,
    market_id TEXT NOT NULL,
    price BIGINT,
    size BIGINT,
    buyer TEXT NOT NULL,
    seller TEXT NOT NULL,
    aggressor TEXT NOT NULL,
    buy_order TEXT NOT NULL,
    sell_order TEXT NOT NULL,
    timestamp BIGINT NOT NULL,
    synth_timestamp BIGINT NOT NULL,
    type TEXT NOT NULL,
    buyer_fee_maker NUMERIC(40),
    buyer_fee_infrastructure NUMERIC(40),
    buyer_fee_liquidity NUMERIC(40),
    seller_fee_maker NUMERIC(40),
    seller_fee_infrastructure NUMERIC(40),
    seller_fee_liquidity NUMERIC(40),
    is_first_in_bucket INTEGER,
    PRIMARY KEY (market_id, synth_timestamp)
);

SELECT create_hypertable('trades', 'synth_timestamp', chunk_time_interval => 604800000000000, if_not_exists => TRUE);

CREATE TABLE IF NOT EXISTS sma_5m (
    market_id TEXT,
    bucket BIGINT,
    sma50 INTEGER,
    sma100 INTEGER,
    sma200 INTEGER
);

CREATE TABLE IF NOT EXISTS sma_1h (
    market_id TEXT,
    bucket BIGINT,
    sma50 INTEGER,
    sma100 INTEGER,
    sma200 INTEGER
);

CREATE TABLE IF NOT EXISTS sma_1d (
    market_id TEXT,
    bucket BIGINT,
    sma50 INTEGER,
    sma100 INTEGER,
    sma200 INTEGER
);
`;

const insertQuery = `
INSERT INTO trades (
    id,
    market_id,
    price,
    size,
    buyer,
    seller,
    aggressor,
    buy_order,
    sell_order,
    timestamp,
    synth_timestamp,
    type,
    buyer_fee_maker,
    buyer_fee_infrastructure,
    buyer_fee_liquidity,
    seller_fee_maker,
    seller_fee_infrastructure,
    seller_fee_liquidity,
    is_first_in_bucket
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
    $13,
    $14,
    $15,
    $16,
    $17,
    $18,
    $19
) RETURNING *`
// ON CONFLICT DO NOTHING
// RETURNING *`

// const fInsertTrades = `
// INSERT INTO trades (
//     id,
//     market_id,
//     price,
//     size,
//     buyer,
//     seller,
//     aggressor,
//     buy_order,
//     sell_order,
//     timestamp,
//     synth_timestamp,
//     type,
//     buyer_fee_maker,
//     buyer_fee_infrastructure,
//     buyer_fee_liquidity,
//     seller_fee_maker,
//     seller_fee_infrastructure,
//     seller_fee_liquidity,
//     is_first_in_bucket
// ) values %L RETURNING *;
// `;

const fInsertTrades = `
INSERT INTO trades (
    id,
    market_id,
    price,
    size,
    buyer,
    seller,
    aggressor,
    buy_order,
    sell_order,
    timestamp,
    synth_timestamp,
    type,
    buyer_fee_maker,
    buyer_fee_infrastructure,
    buyer_fee_liquidity,
    seller_fee_maker,
    seller_fee_infrastructure,
    seller_fee_liquidity,
    is_first_in_bucket
) SELECT DISTINCT * FROM ( VALUES %s ) t ON CONFLICT DO NOTHING;
`;

const setIntegerNowFunc = `
CREATE FUNCTION most_recent_trade_time(in market_id TEXT) RETURNS BIGINT
AS $$
    SELECT synth_timestamp
    FROM trades 
    WHERE market_id = $1
    ORDER BY synth_timestamp DESC 
    LIMIT 1
$$ LANGUAGE SQL;

CREATE FUNCTION first_trade_time(in market_id TEXT) RETURNS BIGINT
AS $$
    SELECT synth_timestamp
    FROM trades
    WHERE market_id = $1
    ORDER BY synth_timestamp
    LIMIT 1
$$ LANGUAGE SQL;

CREATE FUNCTION current_time_ns() RETURNS BIGINT
LANGUAGE SQL STABLE AS $$
SELECT (EXTRACT(EPOCH FROM CURRENT_TIMESTAMP) * 1000000000)::bigint
$$;

SELECT set_integer_now_func('trades', 'current_time_ns');
`
// AS $$
//     EXECUTE format('
//         SELECT bucket
//         FROM %I
//         WHERE market_id = $1 AND (buyer = $3 OR seller = $3)
//         ORDER BY bucket 
//         LIMIT 1', $2)
// $$ LANGUAGE SQL;

const continuousAggregates = {
    candles: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW candles_5m
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(300000000000, synth_timestamp) AS bucket,
                max(price) AS high,
                min(price) AS low,
                first(price, synth_timestamp) AS open,
                last(price, synth_timestamp) AS close,
                last(timestamp, timestamp) AS last_timestamp,
                sum(size) AS volume_contracts,
                sum(size * price) AS volume
            FROM trades
            GROUP BY market_id, time_bucket(300000000000, synth_timestamp);`,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('candles_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        },
        interval_1h: {
            createMatView: `CREATE MATERIALIZED VIEW candles_1h
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(3600000000000, synth_timestamp) AS bucket,
                max(price) AS high,
                min(price) AS low,
                first(price, synth_timestamp) AS open,
                last(price, synth_timestamp) AS close,
                last(timestamp, timestamp) AS last_timestamp,
                sum(size) AS volume_contracts,
                sum(size * price) AS volume
            FROM trades
            GROUP BY market_id, time_bucket(3600000000000, synth_timestamp);`,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('candles_1h',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');`
        },
        interval_1d: {
            createMatView: `CREATE MATERIALIZED VIEW candles_1d
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(86400000000000, synth_timestamp) AS bucket,
                max(price) AS high,
                min(price) AS low,
                first(price, synth_timestamp) AS open,
                last(price, synth_timestamp) AS close,
                last(timestamp, timestamp) AS last_timestamp,
                sum(size) AS volume_contracts,
                sum(size * price) AS volume
            FROM trades
            GROUP BY market_id, time_bucket(86400000000000, synth_timestamp);`,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('candles_1d',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');`
        }
    },
    takerData: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW taker_data_5m
            WITH (timescaledb.continuous) AS
            SELECT
                market_id,
                time_bucket(300000000000, synth_timestamp) AS bucket,
                last(timestamp, timestamp) AS timestamp,
                sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size ELSE 0 END) AS volume_long_contracts,
                sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size * price ELSE 0 END) AS volume_long,
                sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size ELSE 0 END) AS volume_short_contracts,
                sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size * price ELSE 0 END) AS volume_short,
                count(DISTINCT buyer) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buyers,
                count(DISTINCT seller) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sellers,
                count(*) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buys,
                count(*) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sells,
                avg(size * price) FILTER (WHERE aggressor = 'SIDE_BUY') AS avg_buy_size,
                avg(size * price) FILTER (WHERE aggressor = 'SIDE_SELL') AS avg_sell_size
            FROM trades
            GROUP BY market_id, time_bucket(300000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('taker_data_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');
            `
        },
        interval_1h: {
            createMatView: `CREATE MATERIALIZED VIEW taker_data_1h
            WITH (timescaledb.continuous) AS
            SELECT
                market_id,
                time_bucket(3600000000000, synth_timestamp) AS bucket,
                last(timestamp, timestamp) AS timestamp,
                sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size ELSE 0 END) AS volume_long_contracts,
                sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size * price ELSE 0 END) AS volume_long,
                sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size ELSE 0 END) AS volume_short_contracts,
                sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size * price ELSE 0 END) AS volume_short,
                count(DISTINCT buyer) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buyers,
                count(DISTINCT seller) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sellers,
                count(*) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buys,
                count(*) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sells,
                avg(size * price) FILTER (WHERE aggressor = 'SIDE_BUY') AS avg_buy_size,
                avg(size * price) FILTER (WHERE aggressor = 'SIDE_SELL') AS avg_sell_size
            FROM trades
            GROUP BY market_id, time_bucket(3600000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('taker_data_1h',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        },
        interval_1d: {
            createMatView: `CREATE MATERIALIZED VIEW taker_data_1d
            WITH (timescaledb.continuous) AS
            SELECT
                market_id,
                time_bucket(86400000000000, synth_timestamp) AS bucket,
                last(timestamp, timestamp) AS timestamp,
                sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size ELSE 0 END) AS volume_long_contracts,
                sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size * price ELSE 0 END) AS volume_long,
                sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size ELSE 0 END) AS volume_short_contracts,
                sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size * price ELSE 0 END) AS volume_short,
                count(DISTINCT buyer) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buyers,
                count(DISTINCT seller) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sellers,
                count(*) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buys,
                count(*) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sells,
                avg(size * price) FILTER (WHERE aggressor = 'SIDE_BUY') AS avg_buy_size,
                avg(size * price) FILTER (WHERE aggressor = 'SIDE_SELL') AS avg_sell_size
            FROM trades
            GROUP BY market_id, time_bucket(86400000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('taker_data_1d',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        }
        // interval_1d: {
        //     createMatView: `CREATE MATERIALIZED VIEW taker_data_1d
        //     WITH (timescaledb.continuous) AS
        //     SELECT market_id,
        //         time_bucket(86400000000000, bucket) AS bucket,
        //         sum(volume_long_contracts) AS volume_long_contracts,
        //         sum(volume_long) AS volume_long,
        //         sum(volume_short_contracts) AS volume_short_contracts,
        //         sum(volume_short) AS volume_short,
        //         sum(num_buyers) AS num_buyers,
        //         sum(num_sellers) AS num_sellers,
        //         sum(num_buys) AS num_buys,
        //         sum(num_sells) AS num_sells,
        //         sum(sum_buyer_size) AS sum_buyer_size,
        //         sum(sum_seller_size) AS sum_seller_size,
        //         sum(sum_buyer_size) / sum(num_buys) AS avg_buyer_size,
        //         sum(sum_seller_size) / sum(num_sells) AS avg_seller_size
        //     FROM taker_data_1h
        //     GROUP BY market_id, time_bucket(86400000000000, bucket);
        //     `,
        //     addRefreshPolicy: `SELECT add_continuous_aggregate_policy('taker_data_1d',
        //     start_offset => 2592000000000000,
        //     end_offset => 60000000000,
        //     schedule_interval => INTERVAL '1 minute');
        //     `
        // }
    },
    infraFeesByMarket: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW infra_fees_by_market_5m
            WITH (timescaledb.continuous) AS 
            SELECT market_id,
                time_bucket(300000000000, synth_timestamp) AS bucket,
                max(timestamp) AS timestamp,
                sum(buyer_fee_infrastructure + seller_fee_infrastructure) as infrastructure_fee_paid
            FROM trades
            GROUP BY market_id, time_bucket(300000000000, synth_timestamp);
            `,
            addrefreshPolicy: `SELECT add_continuous_aggregate_policy('infra_fees_by_market_5m',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        }
    },
    infraFeesByParty: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW infra_fees_by_party_5m
            WITH (timescaledb.continuous) AS 
            SELECT market_id,
                time_bucket(300000000000, synth_timestamp) AS bucket,
                max(timestamp) AS timestamp,
                buyer AS buyer,
                seller AS seller,
                sum(buyer_fee_infrastructure) AS buyer_fee_infrastructure,
                sum(seller_fee_infrastructure) AS seller_fee_infrastructure
            FROM trades
            GROUP BY market_id, buyer, seller, time_bucket(300000000000, synth_timestamp);
            `,
            addrefreshPolicy: `SELECT add_continuous_aggregate_policy('infra_fees_by_party_5m',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        }
    },
    feesPaid: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW fees_paid_5m
            WITH (timescaledb.continuous) AS 
            SELECT market_id,
                time_bucket(300000000000, synth_timestamp) AS bucket,
                buyer AS buyer,
                seller AS seller,
                sum(buyer_fee_maker) AS buyer_fee_maker,
                sum(buyer_fee_liquidity) AS buyer_fee_liquidity,
                sum(buyer_fee_infrastructure) AS buyer_fee_infrastructure,
                sum(seller_fee_maker) AS seller_fee_maker,
                sum(seller_fee_liquidity) AS seller_fee_liquidity,
                sum(seller_fee_infrastructure) AS seller_fee_infrastructure,
                sum(buyer_fee_infrastructure + buyer_fee_maker + buyer_fee_liquidity) AS buyer_fee,
                sum(seller_fee_infrastructure + seller_fee_maker + seller_fee_liquidity) AS seller_fee
            FROM trades
            GROUP BY market_id, buyer, seller, time_bucket(300000000000, synth_timestamp);
            `,
            addrefreshPolicy: `SELECT add_continuous_aggregate_policy('fees_paid_5m',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        },
        interval_1h: {
            createMatView: `CREATE MATERIALIZED VIEW fees_paid_1h
            WITH (timescaledb.continuous) AS 
            SELECT market_id,
                time_bucket(3600000000000, bucket) AS bucket,
                buyer AS buyer,
                seller AS seller,
                sum(buyer_fee) AS buyer_fee,
                sum(seller_fee) AS seller_fee
            FROM fees_paid_5m
            GROUP BY market_id, buyer, seller, time_bucket(3600000000000, bucket);
            `,
            addrefreshPolicy: `SELECT add_continuous_aggregate_policy('fees_paid_1h',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        },
        interval_1d: {
            createMatView: `CREATE MATERIALIZED VIEW fees_paid_1d
            WITH (timescaledb.continuous) AS 
            SELECT market_id,
                time_bucket(86400000000000, bucket) AS bucket,
                buyer AS buyer,
                seller AS seller,
                sum(buyer_fee) AS buyer_fee,
                sum(seller_fee) AS seller_fee
            FROM fees_paid_1h
            GROUP BY market_id, buyer, seller, time_bucket(86400000000000, bucket);
            `,
            addrefreshPolicy: `SELECT add_continuous_aggregate_policy('fees_paid_1d',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        }
    },
    marketData: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW market_data_5m
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(300000000000, synth_timestamp) AS bucket,
                count(market_id) AS num_trades,
                sum(size) AS volume_contracts,
                sum(size * price) AS volume,
                sum(buyer_fee_infrastructure + seller_fee_infrastructure) AS fees_paid_infrastructure,
                sum(buyer_fee_infrastructure + buyer_fee_maker +
                    buyer_fee_liquidity + seller_fee_infrastructure +
                    seller_fee_maker + seller_fee_liquidity) AS fees_paid,
                max(timestamp) as timestamp
            FROM trades
            GROUP BY market_id, time_bucket(300000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('market_data_5m',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        },
        interval_1h: {
            createMatView: `CREATE MATERIALIZED VIEW market_data_1h
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(3600000000000, synth_timestamp) AS bucket,
                count(market_id) AS num_trades,
                sum(size) AS volume_contracts,
                sum(size * price) AS volume,
                sum(buyer_fee_infrastructure + seller_fee_infrastructure) AS fees_paid_infrastructure,
                sum(buyer_fee_infrastructure + buyer_fee_maker +
                    buyer_fee_liquidity + seller_fee_infrastructure +
                    seller_fee_maker + seller_fee_liquidity) AS fees_paid,
                max(timestamp) as timestamp
            FROM trades
            GROUP BY market_id, time_bucket(3600000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('market_data_1h',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        },
        interval_1d: {
            createMatView: `CREATE MATERIALIZED VIEW market_data_1d
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(86400000000000, synth_timestamp) AS bucket,
                count(market_id) AS num_trades,
                sum(size) AS volume_contracts,
                sum(size * price) AS volume,
                sum(buyer_fee_infrastructure + seller_fee_infrastructure) AS fees_paid_infrastructure,
                sum(buyer_fee_infrastructure + buyer_fee_maker +
                    buyer_fee_liquidity + seller_fee_infrastructure +
                    seller_fee_maker + seller_fee_liquidity) AS fees_paid,
                max(timestamp) as timestamp
            FROM trades
            GROUP BY market_id, time_bucket(86400000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('market_data_1d',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        }
    },
    partyData: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW party_data_5m
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(300000000000, synth_timestamp) AS bucket,
                buyer AS buyer,
                seller AS seller,
                count(buyer) FILTER (WHERE buyer != seller) AS num_trades,
                count(buyer) FILTER (WHERE buyer = seller) AS num_self_trades,
                sum(CASE WHEN buyer != seller THEN size ELSE 0 END) AS volume_contracts,
                sum(CASE WHEN buyer != seller THEN size ELSE 0 END * price) AS volume,
                sum(CASE WHEN buyer = seller THEN size ELSE 0 END) AS self_volume_contracts,
                sum(CASE WHEN buyer = seller THEN size ELSE 0 END * price) AS self_volume,
                sum(buyer_fee_infrastructure + buyer_fee_maker + buyer_fee_liquidity) AS buyer_fee,
                sum(buyer_fee_infrastructure) as buyer_fee_infrastructure,
                sum(buyer_fee_maker) as buyer_fee_maker,
                sum(buyer_fee_liquidity) as buyer_fee_liquidity,
                sum(seller_fee_infrastructure + seller_fee_maker + seller_fee_liquidity) AS seller_fee,
                sum(seller_fee_infrastructure) as seller_fee_infrastructure,
                sum(seller_fee_maker) as seller_fee_maker,
                sum(seller_fee_liquidity) as seller_fee_liquidity,
                max(timestamp) as timestamp
            FROM trades
            GROUP BY market_id, buyer, seller, time_bucket(300000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('party_data_5m',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        },
        interval_1h: {
            createMatView: `CREATE MATERIALIZED VIEW party_data_1h
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(3600000000000, synth_timestamp) AS bucket,
                buyer AS buyer,
                seller AS seller,
                count(buyer) FILTER (WHERE buyer != seller) AS num_trades,
                count(buyer) FILTER (WHERE buyer = seller) AS num_self_trades,
                sum(CASE WHEN buyer != seller THEN size ELSE 0 END) AS volume_contracts,
                sum(CASE WHEN buyer != seller THEN size ELSE 0 END * price) AS volume,
                sum(CASE WHEN buyer = seller THEN size ELSE 0 END) AS self_volume_contracts,
                sum(CASE WHEN buyer = seller THEN size ELSE 0 END * price) AS self_volume,
                sum(buyer_fee_infrastructure + buyer_fee_maker + buyer_fee_liquidity) AS buyer_fee,
                sum(buyer_fee_infrastructure) as buyer_fee_infrastructure,
                sum(buyer_fee_maker) as buyer_fee_maker,
                sum(buyer_fee_liquidity) as buyer_fee_liquidity,
                sum(seller_fee_infrastructure + seller_fee_maker + seller_fee_liquidity) AS seller_fee,
                sum(seller_fee_infrastructure) as seller_fee_infrastructure,
                sum(seller_fee_maker) as seller_fee_maker,
                sum(seller_fee_liquidity) as seller_fee_liquidity,
                max(timestamp) as timestamp
            FROM trades
            GROUP BY market_id, buyer, seller, time_bucket(3600000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('party_data_1h',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        },
        interval_1d: {
            createMatView: `CREATE MATERIALIZED VIEW party_data_1d
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(86400000000000, synth_timestamp) AS bucket,
                buyer AS buyer,
                seller AS seller,
                count(buyer) FILTER (WHERE buyer != seller) AS num_trades,
                count(buyer) FILTER (WHERE buyer = seller) AS num_self_trades,
                sum(CASE WHEN buyer != seller THEN size ELSE 0 END) AS volume_contracts,
                sum(CASE WHEN buyer != seller THEN size ELSE 0 END * price) AS volume,
                sum(CASE WHEN buyer = seller THEN size ELSE 0 END) AS self_volume_contracts,
                sum(CASE WHEN buyer = seller THEN size ELSE 0 END * price) AS self_volume,
                sum(buyer_fee_infrastructure + buyer_fee_maker + buyer_fee_liquidity) AS buyer_fee,
                sum(buyer_fee_infrastructure) as buyer_fee_infrastructure,
                sum(buyer_fee_maker) as buyer_fee_maker,
                sum(buyer_fee_liquidity) as buyer_fee_liquidity,
                sum(seller_fee_infrastructure + seller_fee_maker + seller_fee_liquidity) AS seller_fee,
                sum(seller_fee_infrastructure) as seller_fee_infrastructure,
                sum(seller_fee_maker) as seller_fee_maker,
                sum(seller_fee_liquidity) as seller_fee_liquidity,
                max(timestamp) as timestamp
            FROM trades
            GROUP BY market_id, buyer, seller, time_bucket(86400000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('party_data_1d',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
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

const createUserDefinedFuncs = async (client) => {

    const queryQueue = [];

    for (let [ name, query ] of Object.entries(userDefinedFunctions)) {
        queryQueue.push({
            name: name,
            query: query
        });
    };

    const next = (obj) => {
        return new Promise((resolve, reject) => {
            console.log(`Submitting query ${obj.name}.`)
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
    const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers, connectRetryOptions: {
        retries: 5,
        minTimeout: 1000,
        maxTimeout: 10000,
        randomize: true
      }});
    const kafkaAdmin = new kafka.Admin(kafkaClient);

    kafkaProducer = new kafka.Producer(kafkaClient);

    // Connect to postgres.
    pgPool.connect((err) => {
        if (err) {
            console.log(err);
        }
    });

    pgClient.connect((err) => {
        if (!err) {
            console.log("Connected to postgres...");
            
            // List kafka topics
            kafkaAdmin.listTopics((err, res) => {
                if (!err) {
                    console.log("Kafka Topics: ", res);

                    // Check for "trades" topic
                    const topics = [];
                    for (let i=1; i<res.length; i++) {
                        topics.push(Object.keys(res[i].metadata)[0]);
                    }

                    if (topics.includes("trades")) {

                        console.log("Topic already exists.");
                        // Set up consumer
                        setConsumer(kafkaClient, kafkaConsumer);

                    } else {

                        // Create topics.
                        const topics = [];
                        for (let topicName of Object.keys(topicBusEventMappings)) {
                            topics.push({
                                topic: topicName,
                                partitions: 1,
                                replicationFactor: 1
                            })
                        }

                        kafkaAdmin.createTopics(topics, (err, result) => {
                            if (!err) {

                                console.log("Topics created successfully");
                                // Set consumer
                                setConsumer(kafkaClient, kafkaConsumer);

                            } else {
                                console.log(err);
                            }
                        });
                    };

                } else {
                    console.log("Failed to list topics");
                    console.error(err);
                };
            });

            // List tables
            // pgClient.query('SELECT * FROM information_schema.tables;', (err, res) => {
            //     if (!err) {
            //         console.log("Listing tables...");
            //         // console.log(res);
            //         console.log(res.rows.length);
            //         // Create a trades table.
            //         pgClient.query(createTablesQuery, (err, res) => {
            //             if (!err) {
            //                 console.log(res);
            //                 // Set integer time.
            //                 pgClient.query(setIntegerNowFunc, (err, res) => {
            //                     if(!err) {
            //                         console.log(res);
            //                         createContAggs(pgPool, ["candles", "takerData", "marketData", "partyData", "infraFeesByMarket"]);
            //                     } else {
            //                         console.log(err);
            //                         createContAggs(pgPool, ["candles", "takerData", "marketData", "partyData", "infraFeesByMarket"]);
            //                     }
            //                 });
            //             } else {
            //                 console.log(err);
            //             }
            //         });
            //     } else {
            //         console.log(err);
            //     }
            // });
        } else {
            console.log(err);
        }
    });

};

const setConsumer = (kafkaClient, kafkaConsumer) => {
    kafkaConsumer = new kafka.Consumer(kafkaClient, [], { groupId: "trades-group-27" });
    kafkaConsumer.on("message", (msg) => {
        // console.log("New message");
        const evt = JSON.parse(msg.value);

        // Logic for synchronous block inserts.
        if (!replaying) {
            if (evt.Event.BeginBlock) {
                // console.log(evt);
                busEventBlockMap[evt.Event.BeginBlock.height] = [];
            }

            if (evt.Event.Trade) {
                
                const trade = evt.Event.Trade;
                const idParts = evt.id.split('-');

                // Create synthetic timestamp for each trade
                const synthTimestamp = BigInt(trade.timestamp) + BigInt(idParts[1]);
                trade["synth_timestamp"] = synthTimestamp;
    
                if (!(trade.aggressor == 1 || trade.aggressor == 2)) {
                    trade.aggressor = 0;
                }
    
                if (!trade.aggressor && !(trade.aggressor === 0)) {
                    console.log("Aggressor not found...");
                    console.log(trade);
                }

                // convert enums to their respective text values
                trade.type = tradeTypeMappings[trade.type];
                trade.aggressor = tradeAggressorMappings[trade.aggressor];
                
                busEventBlockMap[evt.id.split('-')[0]].push(formatTrade(trade));
            };

            if (evt.Event.EndBlock) {
                
                if (Object.values(busEventBlockMap).length == 0) {
                    return;
                }

                const height = evt.Event.EndBlock.height;
                if (busEventBlockMap[height].length) {
                    blockPersistTrades(height, busEventBlockMap[height].slice());
                } else {
                    blockEmitter.emit('noTrades', height);
                }
                delete busEventBlockMap[height-1000];

            };

        } else {
            if (evt.Event.Trade) {
            
                const trade = evt.Event.Trade;
                
                // Extract evt index in block from index
                const id = evt.id;
                const idParts = id.split('-');
                // console.log(idParts);
                
                // Create synthetic timestamp for each trade
                const synthTimestamp = BigInt(trade.timestamp) + BigInt(idParts[1]);
                trade["synth_timestamp"] = synthTimestamp;
    
                if (!(trade.aggressor == 1 || trade.aggressor == 2)) {
                    trade.aggressor = 0;
                }
    
                // convert enum fields to their respective text values
                trade.type = tradeTypeMappings[trade.type];
                trade.aggressor = tradeAggressorMappings[trade.aggressor];
    
                if (!trade.aggressor && !(trade.aggressor === 0)) {
                    console.log("Aggressor not found...");
                    console.log(trade);
                }
    
                formattedBatch.push(formatTrade(trade));
                if (formattedBatch.length >= 500) {
                    batchPersistTrades(formattedBatch.slice());
                    formattedBatch.length = 0;
                }
            }
        }
    });
    kafkaConsumer.addTopics([{ topic: 'trades', offset: 0 }], () => console.log("topic added"));
};

const batchPersistTrades = (rows) => {
    
    const typeCastings = [
        '::text', '::text', '::bigint', '::bigint', '::text', '::text', '::text', '::text',
        '::text', '::bigint', '::bigint', '::text', '::numeric(40)', '::numeric(40)', '::numeric(40)',
        '::numeric(40)', '::numeric(40)', '::numeric(40)', '::integer'
    ];

    let template = `(`;
    for (let elem of rows[0]) {
        template = template + format(`%L%%s, `, elem);
    }

    // console.log(format(fInsertTrades, format(template.slice(0,-2)+')', ...typeCastings)+', '+format('%L', rows.slice(1))));

    pgPool.query(format(fInsertTrades, format(template.slice(0,-2)+')', ...typeCastings)+', '+format('%L', rows.slice(1))), [], (err, res) => { // format(fInsertTrades, rows)
        if (!err) {
            
        } else {
            console.log(`Error performing inserts`);
            console.log(err);
            console.log(`Error Code: `, err.code);
            if (err.code == '23505') { // Duplicate key violates unique constraint
                // Retry inserts individually

            }
        }
    });
};

const persistTrade = (trade) => {
    // Accepts a single formatted trade and persists it to the database.

    pgPool.query(insertQuery, trade, (err, res) => {
        if(err) {
            console.log("Error performing insert of trade");
            console.log(err);
            console.log(trade);
        } else {
            // console.log("Insert successful");
        };
    });
};

const formatTrade = (trade) => {

    // Logic to detect when a trade is the first for a particular time bucket, this could be used to pre-aggregate
    // certain data that cannot be aggregated in continuous aggregates.
    // Currently unused.
    let isFirstInBucket = 0;
    for (let interval of ["interval_5m", "interval_1h", "interval_1d"]) {
        if (trade.synth_timestamp/intervalMap[interval] > bucketIndices[interval]) {
            bucketIndices[interval] = trade.synth_timestamp/intervalMap[interval];
            isFirstInBucket += 1;
        }
    }

    if (!trade.buyer_fee) {
        trade.buyer_fee = {
            maker_fee: "0",
            infrastructure_fee: "0",
            liquidity_fee: "0"
        }
    }

    if (!trade.seller_fee) {
        trade.seller_fee = {
            maker_fee: "0",
            infrastructure_fee: "0",
            liquidity_fee: "0"
        }
    }

    const formatted = [
        trade.id, trade.market_id, parseInt(trade.price), parseInt(trade.size), trade.buyer,
        trade.seller, trade.aggressor, trade.buy_order, trade.sell_order, trade.timestamp, trade.synth_timestamp, trade.type, 
        trade.buyer_fee.maker_fee, trade.buyer_fee.infrastructure_fee, trade.buyer_fee.liquidity_fee,
        trade.seller_fee.maker_fee, trade.seller_fee.infrastructure_fee, trade.seller_fee.liquidity_fee, isFirstInBucket
    ];

    return formatted;
};

const blockPersistTrades = (height, rows) => {

    const startTime = performance.now();

    const typeCastings = [
        '::text', '::text', '::bigint', '::bigint', '::text', '::text', '::text', '::text',
        '::text', '::bigint', '::bigint', '::text', '::numeric(40)', '::numeric(40)', '::numeric(40)',
        '::numeric(40)', '::numeric(40)', '::numeric(40)', '::integer'
    ];

    let template = `(`;
    for (let elem of rows[0]) {
        template = template + format(`%L%%s, `, elem);
    }

    let formatted;
    if (rows.length == 1) {
        formatted = format(fInsertTrades, format(template.slice(0,-2)+')', ...typeCastings));
    } else {
        formatted = format(fInsertTrades, format(template.slice(0,-2)+')', ...typeCastings)+', '+format('%L', rows.slice(1)))
    }

    pgPool.query(formatted, [], (err, res) => { // format(fInsertTrades, rows)
        if (!err) {
            
            console.log(`Block inserts successful for height ${height}`);
            console.log(`Time elapsed: ${performance.now() - startTime}ms`);
            blockEmitter.emit('successfulInserts', height);

        } else {
            console.log(`Error performing inserts for height ${height}`);
            console.log(err);
            console.log(`Error Code: `, err.code);
            if (err.code == '23505') { // Duplicate key violates unique constraint
                // Retry inserts individually

            }
            blockEmitter.emit('failedInserts', height);
        }
    });

};

setTimeout(start, 28000);