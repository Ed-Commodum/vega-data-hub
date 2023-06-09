// Process for the trades service:
//  - Connect to kafka broker.
//  - Connect to db.
//  - Set up window functions and continuous aggregates on db for computations.
//  - Create "trades" topic if not already exists.
//  - Read trades from the "trades" topic.
//  - Save trades to db.

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
const { EventEmitter } = require("node:events");
const { nextTick } = require('node:process');

// const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");
const kafkaBrokers = process.env.KAFKA_BROKERS;

console.log(kafkaBrokers);
console.log(process.env);

let kafkaConsumer;

let finishedQueries = false;
let subQueue = [];
let lastKnownTradeSynthTimestamp = 1n;
let tradeBlockIndex = 0n;
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

SELECT create_hypertable('trades', 'synth_timestamp', chunk_time_interval => 604800000000000);

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
                sum(size) AS volume
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
                sum(volume) AS volume
            FROM candles_1h
            GROUP BY market_id, time_bucket(86400000000000, bucket);`,
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
            SELECT market_id,
                time_bucket(300000000000, synth_timestamp) AS bucket,
                sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size ELSE 0 END) AS volume_long,
                sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size ELSE 0 END) AS volume_short,
                count(DISTINCT buyer) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buyers,
                count(DISTINCT seller) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sellers,
                count(*) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buys,
                count(*) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sells,
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
                time_bucket(3600000000000, synth_timestamp) AS bucket,
                sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size ELSE 0 END) AS volume_long,
                sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size ELSE 0 END) AS volume_short,
                count(DISTINCT buyer) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buyers,
                count(DISTINCT seller) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sellers,
                count(*) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buys,
                count(*) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sells,
                avg(size) FILTER (WHERE aggressor = 'SIDE_BUY') AS avg_buyer_size,
                avg(size) FILTER (WHERE aggressor = 'SIDE_SELL') AS avg_seller_size
            FROM trades
            GROUP BY market_id, time_bucket(3600000000000, synth_timestamp);
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
                time_bucket(86400000000000, synth_timestamp) AS bucket,
                sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size ELSE 0 END) AS volume_long,
                sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size ELSE 0 END) AS volume_short,
                count(DISTINCT buyer) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buyers,
                count(DISTINCT seller) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sellers,
                count(*) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buys,
                count(*) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sells,
                avg(size) FILTER (WHERE aggressor = 'SIDE_BUY') AS avg_buyer_size,
                avg(size) FILTER (WHERE aggressor = 'SIDE_SELL') AS avg_seller_size
            FROM trades
            GROUP BY market_id, time_bucket(86400000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('taker_data_1d',
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
                count(market_id) as num_trades,
                sum(size) as volume,
                sum(buyer_fee_infrastructure + seller_fee_infrastructure) AS fees_paid_infrastructure,
                sum(buyer_fee_infrastructure + buyer_fee_maker +
                    buyer_fee_liquidity + seller_fee_infrastructure +
                    seller_fee_maker + seller_fee_liquidity) AS fees_paid
            FROM trades
            GROUP BY market_id, buyer, seller, time_bucket(300000000000, synth_timestamp);
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
                sum(CASE WHEN buyer != seller THEN size ELSE 0 END) AS volume,
                sum(CASE WHEN buyer = seller THEN size ELSE 0 END) AS self_volume,
                sum(buyer_fee_infrastructure + buyer_fee_maker + buyer_fee_liquidity) AS buyer_fee,
                sum(buyer_fee_infrastructure) as buyer_fee_infrastructure,
                sum(buyer_fee_maker) as buyer_fee_maker,
                sum(buyer_fee_liquidity) as buyer_fee_liquidity,
                sum(seller_fee_infrastructure + seller_fee_maker + seller_fee_liquidity) AS seller_fee,
                sum(seller_fee_infrastructure) as seller_fee_infrastructure,
                sum(seller_fee_maker) as seller_fee_maker,
                sum(seller_fee_liquidity) as seller_fee_liquidity
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
                                    createContAggs(pgPool, ["candles", "takerData", "feesPaid", "marketData", "partyData"]);

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

                // Create topic "trades".
                const topic = [{
                    topic: "trades",
                    partitions: 1,
                    replicationFactor: 1
                }]

                kafkaAdmin.createTopics(topic, (err, result) => {
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
            console.error(err);
        };
    });
};

const setConsumer = (kafkaClient, kafkaConsumer) => {
    kafkaConsumer = new kafka.Consumer(kafkaClient, [{ topic: "trades" }]);
    kafkaConsumer.on("message", (data) => {
        console.log("New message");
        const msg = JSON.parse(data.value);

        if (msg.event == "NEW_QUERY_TRADES") {
            console.log(`${msg.body.data.length} trades recieved.`);
            // Persist these to db as they come in.
            persistTrades(msg.body.data);

        };

        if (msg.event == "NEW_SUB_TRADE" && finishedQueries) {
            console.log("New Subscription Trade");
            // Persist these to db as they come in.
            subQueue.push(msg.body.data);
            flushSubQueue();

        } else if (msg.event == "NEW_SUB_TRADE") {
            console.log("New Subscription Trade, queueing...");
            // Queue these until queries are finished.
            subQueue.push(msg.body.data);
        };

        if (msg.event == "FINISHED_QUERIES") {
            console.log("Finished Queries.");
            finishedQueries = true;
        };
    });
};

const persistTrades = (trades) => {
    // Accepts a batch of trades and persists them to the db in the order in which they are recieved.
    // Excludes trades with a timestamp lower than the lastKnownTradeTimestamp.

    const toInsert = [];

    for (let trade of trades) {

        // Convert unsafe integer to string to prevent precision loss
        trade['timestamp'] = trade.timestamp.toString();

        if ( BigInt(trade.timestamp) < ( lastKnownTradeSynthTimestamp-tradeBlockIndex ) ) {
            continue;
        }

        if ( BigInt(trade.timestamp) == ( lastKnownTradeSynthTimestamp-tradeBlockIndex ) ) {
            lastKnownTradeSynthTimestamp += 1n;
            tradeBlockIndex += 1n;
            // console.log("trade.timestamp: ", trade.timestamp);
            // console.log("BigInt(trade.timestamp): ", BigInt(trade.timestamp));
            // console.log("lastKnownTradeSynthTimestamp", lastKnownTradeSynthTimestamp);
            toInsert.push(formatTrade(trade, tradeBlockIndex));
        } else {
            // New block
            // console.log("trade.timestamp: ", trade.timestamp);
            // console.log("BigInt(trade.timestamp): ", BigInt(trade.timestamp));
            // console.log("lastKnownTradeSynthTimestamp: ", lastKnownTradeSynthTimestamp);
            lastKnownTradeSynthTimestamp = BigInt(trade.timestamp);
            tradeBlockIndex = 0n;
            toInsert.push(formatTrade(trade, tradeBlockIndex));
        }

    };

    let insertErr = false;
    let errCount = 0;

    for (let trade of toInsert) {
        pgPool.query(insertQuery, trade, (err, res) => {
            if(err) {
                console.log(err);
                insertErr = true;
                errCount += 1;
            } else {

            };
        });
    };

    if (!insertErr) {
        console.log("Inserts successful");
    } else {
        console.log("Error performing inserts");
        console.log(`Number of insert errors: ${errCount}`);
    };
};

const formatTrade = (trade, tradeBlockIndex) => {
    // Formats a trade to be inserted into the db.
    // Part of the formatting process is to assign a synthetic time for indexing.
    // This synthetic time is just the block time of the trade +1ns for it's index in the block.
    //      eg; If block time is 500ns then the fifth trade has an sTime of 504ns (1st trade is 500ns).

    const synthTimestamp = BigInt(trade.timestamp) + tradeBlockIndex;
    let isFirstInBucket = 0;

    for (let interval of ["interval_5m", "interval_1h", "interval_1d"]) {
        if (synthTimestamp/intervalMap[interval] > bucketIndices[interval]) {
            bucketIndices[interval] = synthTimestamp/intervalMap[interval];
            isFirstInBucket += 1;
        }
    }

    // console.dir(trade, { depth: null });

    const formatted = [
        trade.id, trade.market_id, parseInt(trade.price), parseInt(trade.size), trade.buyer,
        trade.seller, trade.aggressor, trade.buy_order, trade.sell_order, trade.timestamp, synthTimestamp, trade.type, 
        trade.buyer_fee.maker_fee, trade.buyer_fee.infrastructure_fee, trade.buyer_fee.liquidity_fee,
        trade.seller_fee.maker_fee, trade.seller_fee.infrastructure_fee, trade.seller_fee.liquidity_fee, isFirstInBucket
    ];

    return formatted;
};

const flushSubQueue = () => {
    const trades = [];
    while (subQueue.length) {
        trades.push(subQueue.shift());
    };
    persistTrades(trades);
};

setTimeout(start, 30000);