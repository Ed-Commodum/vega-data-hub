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
const { nextTick } = require('node:process');

const { tradeAggressorMappings, tradeTypeMappings } = require('./type-mappings.js');
const { topicBusEventMappings } = require('./busEventTopicMappings.js');

// const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");
const kafkaBrokers = process.env.KAFKA_BROKERS;

console.log(kafkaBrokers);
console.log(process.env);

let kafkaConsumer;
let kafkaConsumerBlocks;

const formattedBatch = [];
const flushFormattedBatchInterval = setInterval(() => {
    if (formattedBatch.length == 0) return;
    batchPersistTrades(formattedBatch.slice());
    formattedBatch.length = 0;
}, 100);

let subQueue = [];
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
    timestamp TEXT NOT NULL,
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
) SELECT DISTINCT * FROM ( VALUES %L ) t ON CONFLICT DO NOTHING;
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
SELECT '1000000000'::BIGINT * EXTRACT(EPOCH FROM NOW())::BIGINT
$$;

SELECT set_integer_now_func('trades', 'current_time_ns');
`

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
                time_bucket(3600000000000, bucket) AS bucket,
                max(high) AS high,
                min(low) AS low,
                first(open, bucket) AS open,
                last(close, bucket) AS close,
                last(last_timestamp, last_timestamp) AS last_timestamp,
                sum(volume_contracts) AS volume_contracts,
                sum(volume) AS volume
            FROM candles_5m
            GROUP BY market_id, time_bucket(3600000000000, bucket);`,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('candles_1h',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        },
        interval_1d: {
            createMatView: `CREATE MATERIALIZED VIEW candles_1d
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(86400000000000, bucket) AS bucket,
                max(high) AS high,
                min(low) AS low,
                first(open, bucket) AS open,
                last(close, bucket) AS close,
                last(last_timestamp, last_timestamp) AS last_timestamp,
                sum(volume_contracts) AS volume_contracts,
                sum(volume) AS volume
            FROM candles_1h
            GROUP BY market_id, time_bucket(86400000000000, bucket);`,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('candles_1d',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');`
        },
        interval_1d_from_5m: {
            createMatView: `CREATE MATERIALIZED VIEW candles_1d_from_5m
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(86400000000000, bucket) AS bucket,
                max(high) AS high,
                min(low) AS low,
                first(open, bucket) AS open,
                last(close, bucket) AS close,
                last(last_timestamp, last_timestamp) AS last_timestamp,
                sum(volume_contracts) AS volume_contracts,
                sum(volume) AS volume
            FROM candles_5m
            GROUP BY market_id, time_bucket(86400000000000, bucket);`,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('candles_1d_from_5m',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');`
        },
        interval_1d_from_raw: {
            createMatView: `CREATE MATERIALIZED VIEW candles_1d_from_raw
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
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('candles_1d_from_raw',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');`
        }
    },
    takerData: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW taker_data_5m
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(300000000000, synth_timestamp) AS bucket,
                sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size ELSE 0 END) AS volume_long_contracts,
                sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size ELSE 0 END * price) AS volume_long,
                sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size ELSE 0 END) AS volume_short_contracts,
                sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size ELSE 0 END * price) AS volume_short,
                count(DISTINCT buyer) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buyers,
                count(DISTINCT seller) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sellers,
                count(*) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buys,
                count(*) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sells,
                sum(size) FILTER (WHERE aggressor = 'SIDE_BUY') AS sum_buyer_size,
                sum(size) FILTER (WHERE aggressor = 'SIDE_SELL') AS sum_seller_size,
                avg(size) FILTER (WHERE aggressor = 'SIDE_BUY') AS avg_buyer_size,
                avg(size) FILTER (WHERE aggressor = 'SIDE_SELL') AS avg_seller_size
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
            SELECT market_id,
                time_bucket(3600000000000, bucket) AS bucket,
                sum(volume_long_contracts) AS volume_long_contracts,
                sum(volume_long) AS volume_long,
                sum(volume_short_contracts) AS volume_short_contracts,
                sum(volume_short) AS volume_short,
                sum(num_buyers) AS num_buyers,
                sum(num_sellers) AS num_sellers,
                sum(num_buys) AS num_buys,
                sum(num_sells) AS num_sells,
                sum(sum_buyer_size) AS sum_buyer_size,
                sum(sum_seller_size) AS sum_seller_size,
                sum(sum_buyer_size) / sum(num_buys) AS avg_buyer_size,
                sum(sum_seller_size) / sum(num_sells) AS avg_seller_size
            FROM taker_data_5m
            GROUP BY market_id, time_bucket(3600000000000, bucket);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('taker_data_1h',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        },
        interval_1d: {
            createMatView: `CREATE MATERIALIZED VIEW taker_data_1d
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(86400000000000, bucket) AS bucket,
                sum(volume_long_contracts) AS volume_long_contracts,
                sum(volume_long) AS volume_long,
                sum(volume_short_contracts) AS volume_short_contracts,
                sum(volume_short) AS volume_short,
                sum(num_buyers) AS num_buyers,
                sum(num_sellers) AS num_sellers,
                sum(num_buys) AS num_buys,
                sum(num_sells) AS num_sells,
                sum(sum_buyer_size) AS sum_buyer_size,
                sum(sum_seller_size) AS sum_seller_size,
                sum(sum_buyer_size) / sum(num_buys) AS avg_buyer_size,
                sum(sum_seller_size) / sum(num_sells) AS avg_seller_size
            FROM taker_data_1h
            GROUP BY market_id, time_bucket(86400000000000, bucket);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('taker_data_1d',
            start_offset => 2592000000000000,
            end_offset => 60000000000,
            schedule_interval => INTERVAL '1 minute');
            `
        }
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
        // interval_1h: {}
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
        // interval_1h: {}
    }
};

const marketData = {
    totalTrades: 0,
    totalVolume: 0,
    totalFeesPaid: 0,
    totalInfrastructureFees: 0,
    openInterest: 0, // Compute at query time
    return: 0, // Compute at query time
    lnReturn: 0, // Compute at query time
    variance: 0, // Compute at query time
    volatiltiy: 0, // Compute at query time
    valueAtRisk: 0, // Compute at query time
    expectedShortfall: 0, // Compute at query time
    sharpeRatio: 0, // Compute at query time
    sortinoRatio: 0, // Compute at query time
    simpleMAs: { // Compute at query time
        interval_5m: [],
        interval_1h: [],
        interval_1d: []
    },
    exponentialMAs: { // Compute at query time
        interval_5m: [],
        interval_1h: [],
        interval_1d: []
    },
};

const partyData = {
    totalTrades: 0,
    totalVolume: 0,
    totalFeesPaid:  0,
    openPositions: [],
    historicalPnls: {
        realisedPnl: [],
        unrealisedPnl: [],
    }
};


const windowFunctions = {
    movingAverages: {
        interval_5m: `
        SELECT market_id,
            bucket,
            sum(CAST(price AS DECIMAL)) OVER (
                PARTITION BY market_id
                ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 50 FOLLOWING
            ) / 50 as ma50,
            sum(CAST(price AS DECIMAL)) OVER (
                PARTITION BY market_id
                ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 100 FOLLOWING
            ) / 100 as ma100,
            sum(CAST(price AS DECIMAL)) OVER (
                PARTITION BY market_id
                ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 200 FOLLOWING
            ) / 200 as ma200
        FROM candles_5m
        GROUP BY market_id, bucket;
        `,
        interval_1h: {

        },
        interval_1d: {

        }
    },
    marketRiskMetrics: {
        valueAtRisk: {
            interval_1d: {

            }
        },
        expectedShortfall: {
            interval_1d: {

            }
        }
    },
    volatility: {},
}

const userDefinedFunctions = {
    refreshSMA5m:`CREATE FUNCTION refresh_sma_5m( ts BIGINT )
    RETURNS TABLE (
        market_id TEXT, bucket BIGINT, sma50 NUMERIC, sma100 NUMERIC, sma200 NUMERIC
    ) AS $$
    #variable_conflict use_column
    BEGIN
        RETURN QUERY
            SELECT
                market_id,
                bucket,
                sum(CAST(close AS DECIMAL)) OVER (
                    PARTITION BY market_id
                    ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 50 FOLLOWING
                ) / 50 as sma50,
                sum(CAST(close AS DECIMAL)) OVER (
                    PARTITION BY market_id
                    ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 100 FOLLOWING
                ) / 100 as sma100,
                sum(CAST(close AS DECIMAL)) OVER (
                    PARTITION BY market_id
                    ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 200 FOLLOWING
                ) / 200 as sma200
            FROM candles_5m
            WHERE bucket > (ts - 300000000000 * 2);
    END;
    $$ LANGUAGE plpgsql;
    `,
    refreshSMA1h:`CREATE FUNCTION refresh_sma_1h( ts BIGINT )
    RETURNS TABLE (
        market_id TEXT, bucket BIGINT, sma50 NUMERIC, sma100 NUMERIC, sma200 NUMERIC
    ) AS $$
    #variable_conflict use_column
    BEGIN
        RETURN QUERY
            SELECT
                market_id,
                bucket,
                sum(CAST(close AS DECIMAL)) OVER (
                    PARTITION BY market_id
                    ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 50 FOLLOWING
                ) / 50 as sma50,
                sum(CAST(close AS DECIMAL)) OVER (
                    PARTITION BY market_id
                    ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 100 FOLLOWING
                ) / 100 as sma100,
                sum(CAST(close AS DECIMAL)) OVER (
                    PARTITION BY market_id
                    ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 200 FOLLOWING
                ) / 200 as sma200
            FROM candles_1h
            WHERE bucket > (ts - 3600000000000 * 2);
    END;
    $$ LANGUAGE plpgsql;
    `,
    refreshSMA1d:`CREATE FUNCTION refresh_sma_1d( ts BIGINT )
    RETURNS TABLE (
        market_id TEXT, bucket BIGINT, sma50 NUMERIC, sma100 NUMERIC, sma200 NUMERIC
    ) AS $$
    #variable_conflict use_column
    BEGIN
        RETURN QUERY
            SELECT
                market_id,
                bucket,
                sum(CAST(close AS DECIMAL)) OVER (
                    PARTITION BY market_id
                    ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 50 FOLLOWING
                ) / 50 as sma50,
                sum(CAST(close AS DECIMAL)) OVER (
                    PARTITION BY market_id
                    ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 100 FOLLOWING
                ) / 100 as sma100,
                sum(CAST(close AS DECIMAL)) OVER (
                    PARTITION BY market_id
                    ORDER BY bucket DESC ROWS BETWEEN 1 FOLLOWING AND 200 FOLLOWING
                ) / 200 as sma200
            FROM candles_1d
            WHERE bucket > (ts - 86400000000000 * 2);
    END;
    $$ LANGUAGE plpgsql;
    `,
    preAggSMAs: `CREATE FUNCTION pre_agg_sma() RETURNS trigger AS $$
        BEGIN
            IF NEW.is_first_in_bucket = 1 THEN
                INSERT INTO sma_5m
                    SELECT * FROM refresh_sma_5m(NEW.synth_timestamp);
            ELSIF NEW.is_first_in_bucket = 2 THEN
                INSERT INTO sma_5m
                    SELECT * FROM refresh_sma_5m(NEW.synth_timestamp);
                INSERT INTO sma_1h
                    SELECT * FROM refresh_sma_1h(NEW.synth_timestamp);
            ELSIF NEW.is_first_in_bucket = 3 THEN
                INSERT INTO sma_5m
                    SELECT * FROM refresh_sma_5m(NEW.synth_timestamp);
                INSERT INTO sma_1h
                    SELECT * FROM refresh_sma_1h(NEW.synth_timestamp);
                INSERT INTO sma_1d
                    SELECT * FROM refresh_sma_1d(NEW.synth_timestamp);
            END IF;
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
    `,
    preAggSMATrigger: `CREATE TRIGGER pre_agg_sma
        BEFORE INSERT ON trades
        FOR EACH ROW
        EXECUTE PROCEDURE pre_agg_sma();
    `
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
                        setConsumer(kafkaConsumer);

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
                                // Set up consumer
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
            pgClient.query('SELECT * FROM information_schema.tables;', (err, res) => {
                if (!err) {
                    console.log("Listing tables...");
                    // console.log(res);
                    console.log(res.rows.length);
                    // Create a trades table.
                    pgClient.query(createTablesQuery, (err, res) => {
                        if (!err) {
                            console.log(res);
                            // Set integer time.
                            pgClient.query(setIntegerNowFunc, (err, res) => {
                                if(!err) {
                                    console.log(res);
                                    createContAggs(pgPool, ["candles", "takerData", "marketData", "partyData", "infraFeesByMarket"]);
                                } else {
                                    console.log(err);
                                }
                            });
                        } else {
                            console.log(err);
                        }
                    });
                } else {
                    console.log(err);
                }
            });
        } else {
            console.log(err);
        }
    });

};

// let mostRecentBeginBlock;

const setConsumer = (kafkaClient, kafkaConsumer) => {
    // kafkaConsumerBlocks = new kafka.Consumer(kafkaClient, [{ topic: "blocks" }]);
    // kafkaConsumerBlocks.on("message", (msg) => {
    //     console.log("New Block Event");
    //     const evt = JSON.parse(msg.value);
    //     console.log(evt);
    //     mostRecentBeginBlock = evt.beginBlock;
    // });
    kafkaConsumer = new kafka.Consumer(kafkaClient, [], { groupId: "trades-group-19" });
    kafkaConsumer.on("message", (msg) => {
        // console.log("New message");
        const evt = JSON.parse(msg.value);
        if (evt.Event.Trade) {
            // console.log(evt);
            const trade = evt.Event.Trade;
            // console.log(mostRecentBeginBlock);
            // console.log(trade);

            // Extract evt index in block from index
            const id = evt.id;
            const idParts = id.split('-');
            // console.log(idParts);
            // console.log("Event index: ", idParts[1]);
            
            // Create synthetic timestamp for each trade
            const synthTimestamp = BigInt(trade.timestamp) + BigInt(idParts[1]);
            // console.log("Timestamp: ", trade.timestamp);
            // console.log("Synthetic Timestamp: ", synthTimestamp);
            trade["synth_timestamp"] = synthTimestamp;

            if (!(trade.aggressor == 1 || trade.aggressor == 2)) {
                trade.aggressor = 0;
            }

            // convert enum fields to their respective text values
            trade.type = tradeTypeMappings[trade.type];
            trade.aggressor = tradeAggressorMappings[trade.aggressor];

            if (!trade.aggressor && !(trade.aggressor === 0)) {
                console.log(trade);
            }

            formattedBatch.push(formatTrade(trade));
            if (formattedBatch.length >= 300) {
                batchPersistTrades(formattedBatch.slice());
                formattedBatch.length = 0;
            }
        }
        if (evt.Event.BeginBlock) {
            // console.log(evt);
        }
    });
    kafkaConsumer.addTopics([{ topic: 'trades', offset: 0 }], () => console.log("topic added"));
};

const batchPersistTrades = (rows) => {
    pgPool.query(format(fInsertTrades, rows), [], (err, res) => {
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

setTimeout(start, 29000);