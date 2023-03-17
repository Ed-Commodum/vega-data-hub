// Process for the trades service:
//  - Connect to kafka broker.
//  - Connect to db.
//  - Create tables for positions data.
//  - Read trades from the "trades" topic for position computation.
//  - Subscribe to positions endpoint.
//  - Insert positions data into db.

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

let readyForUpdates = false;
const posSubQueue = [];
const positionsObj = {};
const positions = [];

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS positions (
    market_id TEXT NOT NULL,
    party_id TEXT NOT NULL,
    open_volume BIGINT,
    realised_pnl NUMERIC,
    unrealised_pnl NUMERIC,
    average_entry_price BIGINT,
    updated_at BIGINT,
    PRIMARY KEY (market_id, party_id)
);

CREATE TABLE IF NOT EXISTS position_updates (
    market_id TEXT NOT NULL,
    party_id TEXT NOT NULL,
    open_volume BIGINT,
    realised_pnl NUMERIC,
    unrealised_pnl NUMERIC,
    average_entry_price BIGINT,
    updated_at BIGINT,
    PRIMARY KEY (market_id, party_id, updated_at)
);

SELECT create_hypertable('position_updates', 'updated_at', chunk_time_interval => '604800000000000'::BIGINT);

CREATE TABLE IF NOT EXISTS open_interest_updates (
    market_id TEXT NOT NULL,
    open_interest BIGINT,
    timestamp BIGINT,
    PRIMARY KEY (market_id, timestamp)
);

SELECT create_hypertable('open_interest_updates', 'timestamp', chunk_time_interval => '604800000000000'::BIGINT)
`;

const upsertPosition = `
INSERT INTO positions (
    market_id,
    party_id,
    open_volume,
    realised_pnl,
    unrealised_pnl,
    average_entry_price,
    updated_at
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7
) ON CONFLICT (market_id, party_id) DO UPDATE SET (
    market_id,
    party_id,
    open_volume,
    realised_pnl,
    unrealised_pnl,
    average_entry_price,
    updated_at
) = (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7
) RETURNING *
`

const insertPositionUpdate = `
INSERT INTO position_updates (
    market_id,
    party_id,
    open_volume,
    realised_pnl,
    unrealised_pnl,
    average_entry_price,
    updated_at
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7
) RETURNING *
`;

const insertOI = `
INSERT INTO open_interest_updates (
    market_id,
    open_interest,
    timestamp
) values (
    $1,
    $2,
    $3
) RETURNING *
`

const setIntegerNowFunc = `
SELECT set_integer_now_func('position_updates', 'current_time_ns');
SELECT set_integer_now_func('open_interest_updates', 'current_time_ns');
`

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

const windowFunctions = {
    
}

const userDefinedFunctions = {
    
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
                            createContAggs(pgPool, ["openInterest", "pnls"]);
                            
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
        topic: "position_updates",
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
    kafkaConsumer = new kafka.Consumer(kafkaClient, [{ topic: "position_updates" }]);
    kafkaConsumer.on("message", (data) => {
        const dateTime = new Date(Date.now()).toISOString();
        console.log(`${dateTime}: New message on position_updates topic`);
        const msg = JSON.parse(data.value);

        if (msg.event == "POSITIONS_SNAPSHOT") {
            handlePositions(msg.body.data);

        };

        if (msg.event == "POSITIONS_UPDATES" ) {
            if (readyForUpdates) {
                posSubQueue.push(msg.body.data);
                flushPosSubQueue();
            } else {
                posSubQueue.push(msg.body.data);
            }

        };

    });
};

const handlePositions = (data) => {
    // Applies the updates from the positionsList, sets ready when snapshots are finished,
    // inserts new positions into the db, and updates old ones.

    if (data.snapshot) {

        const ts = BigInt(data.snapshot.positions[0].updated_at);

        for (let pos of data.snapshot.positions) {
            if (!positionsObj[pos.market_id]) {
                positionsObj[pos.market_id] = [];
            };

            pos['updated_at'] = BigInt(pos.updated_at);
            pos['open_volume'] = BigInt(pos.open_volume);
            // pos['realised_pnl'] = BigInt(pos.realised_pnl);
            // pos['unrealised_pnl'] = BigInt(pos.unrealised_pnl);

            positionsObj[pos.market_id].push(pos);
        };

        if(data.snapshot.last_page) {
            readyForUpdates = true;
            computeOpenInterest(ts);
            insertPositionUpdates(positionsObj, ts);
            upsertPositions(positionsObj, ts);
        };

    } else if (data.updates) {

        const ts = BigInt(data.updates.positions[0].updated_at);

        for (let pos of data.updates.positions) {
            if (!positionsObj[pos.market_id]) {
                positionsObj[pos.market_id] = [];
            };

            pos['updated_at'] = BigInt(pos.updated_at);
            pos['open_volume'] = BigInt(pos.open_volume);
            // pos['realised_pnl'] = BigInt(pos.realised_pnl);
            // pos['unrealised_pnl'] = BigInt(pos.unrealised_pnl);

            const index = positionsObj[pos.market_id].findIndex(elem => elem.market_id == pos.market_id && elem.party_id == pos.party_id);

            const oldPos = positionsObj[pos.market_id].splice(index, 1, pos);
        };

        computeOpenInterest(ts);
        insertPositionUpdates(positionsObj, ts);
        upsertPositions(positionsObj, ts);
    };

};

const flushPosSubQueue = () => {
    const positions = [];
    while (posSubQueue.length) {
        positions.push(posSubQueue.shift());
    };
    for (let data of positions) {
        handlePositions(data);
    };
};

const computeOpenInterest = (ts) => {

    const openInterestByMarket = {};

    // console.log("Positions Object:");
    // console.log(positionsObj);
    // console.dir(positionsObj, { depth: null });

    for (let marketId of Object.keys(positionsObj)) {
        openInterestByMarket[marketId] = 0n;

        for (let pos of positionsObj[marketId]) {
            if (pos.open_volume > 0n) {
                openInterestByMarket[marketId] += pos.open_volume;
            };      
        };
    };

    for (let [ marketId, value ] of Object.entries(openInterestByMarket)) {

        const row = [ marketId, value, ts ];

        // console.log(`${row[0]}, ${row[1]}, ${row[2]}`);

        pgPool.query(insertOI, row, (err, res) => {
            if (err) {
                console.log("Error inserting open interest update");
            };
        });
    };
};

const insertPositionUpdates = (obj, ts) => {

    for (let positions of Object.values(obj)) {
        for (let pos of positions) {
            if (pos.updated_at < ts) { continue };

            const row = [
                pos.market_id, pos.party_id, pos.open_volume, pos.realised_pnl, pos.unrealised_pnl, pos.average_entry_price, pos.updated_at
            ];

            pgPool.query(insertPositionUpdate, row, (err, res) => {
                if (!err) {

                    // console.dir(res, { depth: null });
                } else {
                    console.log("Error inserting position.");
                }
            });
        };
    };
};

const upsertPositions = (obj, ts) => {

    for (let positions of Object.values(obj)) {
        for (let pos of positions) {
            if (pos.updated_at < ts) { continue };

            const row = [
                pos.market_id, pos.party_id, pos.open_volume, pos.realised_pnl, pos.unrealised_pnl, pos.average_entry_price, pos.updated_at
            ];

            pgPool.query(upsertPosition, row, (err, res) => {
                if (!err) {
                    // console.log(res);
                    
                } else {
                    console.log("Error inserting position.");
                }
            });
        };
    };

};

setTimeout(start, 30000);