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
const { busEventTypes } = require('./busEventTypes.js');
const { RecentBlocks } = require('./ringBuffers.js');

// const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");
const kafkaBrokers = process.env.KAFKA_BROKERS;

console.log(process.env);

const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
// const kafkaProducer = new kafka.Producer(kafkaClient);
// const kafkaAdmin = new kafka.Admin(kafkaClient);
let kafkaConsumer;

const positionsObj = {};
const recentBlocks = new RecentBlocks(500);
const posUpdateQueue = [];
let intervalId;

const flushPosUpdateQueue = () => {
    
    clearInterval(intervalId);

    while (posUpdateQueue.length) {
        // assigning.push(posUpdateQueue.shift());

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

intervalId = setInterval(flushPosUpdateQueue, 50);

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS position_state_updates (
    market_id TEXT NOT NULL,
    party_id TEXT NOT NULL,
    size NUMERIC,
    potential_buys NUMERIC,
    potential_sells NUMERIC,
    vw_buy_price NUMERIC,
    vw_sell_price NUMERIC,
    synth_timestamp BIGINT,
    PRIMARY KEY (market_id, party_id, synth_timestamp)
);

SELECT create_hypertable('position_state_updates', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_esists => TRUE);

CREATE TABLE IF NOT EXISTS position_states (
    market_id TEXT NOT NULL,
    party_id TEXT NOT NULL,
    size NUMERIC,
    potential_buys NUMERIC,
    potential_sells NUMERIC,
    vw_buy_price NUMERIC,
    vw_sell_price NUMERIC,
    synth_timestamp BIGINT,
    PRIMARY KEY (market_id, party_id, synth_timestamp)
);

CREATE TABLE IF NOT EXISTS position_settlements (
    market_id TEXT NOT NULL,
    party_id TEXT NOT NULL,
    price NUMERIC,
    synth_timestamp BIGINT,
    PRIMARY KEY (market_id, party_id, synth_timestamp)
);

SELECT create_hypertable('position_settlements', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_esists => TRUE);
`;

const insertPositionStateUpdate = `
INSERT INTO position_state_updates (
    market_id,
    party_id,
    size,
    potential_buys,
    potential_sells,
    vw_buy_price,
    vw_sell_price,
    synth_timestamp
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8
) ON CONFLICT (market_id, party_id, synth_timestamp) DO NOTHING
RETURNING *;
`;

const upsertPositionState = `
INSERT INTO position_state_updates (
    market_id,
    party_id,
    size,
    potential_buys,
    potential_sells,
    vw_buy_price,
    vw_sell_price,
    synth_timestamp
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8
) ON CONFLICT (market_id, party_id) DO UPDATE SET (
    market_id,
    party_id,
    size,
    potential_buys,
    potential_sells,
    vw_buy_price,
    vw_sell_price,
    synth_timestamp
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

const setIntegerNowFunc = `
SELECT set_integer_now_func('position_state_updates', 'current_time_ns');
SELECT set_integer_now_func('position_settlements', 'current_time_ns');
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
    kafkaConsumer = new kafka.Consumer(kafkaClient, [{ topic: "blocks" },{ topic: "position_updates" }]);
    kafkaConsumer.on("message", (msg) => {

        const dateTime = new Date(Date.now()).toISOString();
        // console.log(`${dateTime}: New message`);

        if (msg.topic == "blocks") {
            // Store blocks in recentBlocks so we can assign timestamps to position_state and
            // settle_position events based on their id.
            const evt = JSON.parse(msg.value);
            // console.log(evt);
            
            if (evt.beginBlock) recentBlocks.push(evt.beginBlock);

        }

        if (msg.topic == "position_updates") {
            // console.log(`${dateTime}: New message on position_updates topic`);
            // console.log(msg);
            const evt = JSON.parse(msg.value);
            // console.log(evt);

            if (evt.type == busEventTypes.BUS_EVENT_TYPE_POSITION_STATE) {
                // console.log(evt);
                posUpdateQueue.push(evt);
            };

            if (evt.type == busEventTypes.BUS_EVENT_TYPE_SETTLE_POSITION) {
                const evt = JSON.parse(msg.value);
                if (evt.tradeSettlements) console.dir(evt, {depth:null});    
            };

            // Maybe necessary to add position_resolution events too?
            if (evt.type == busEventTypes.BUS_EVENT_TYPE_POSITION_RESOLUTION) {

            };
        }

    });
};


const persistPositionStateUpdate = (pos) => {

    console.log(pos);

    const row = [
        pos.marketId, pos.partyId, pos.size, pos.potentialBuys, pos.potentialSells,
        pos.vwBuyPrice, pos.vwSellPrice, pos.synthTimestamp
    ];

    pgPool.query(insertPositionStateUpdate, row, (err, res) => {
        if (!err) {
            // console.dir(res, { depth: null });
        } else {
            console.log("Error inserting position.");
        }
    });

};

const persistPositionState = (pos) => {

    const row = [
        pos.marketId, pos.partyId, pos.size, pos.potentialBuys, pos.potentialSells,
        pos.vwBuyPrice, pos.vwSellPrice, pos.synthTimestamp
    ];

    pgPool.query(upsertPositionState, row, (err, res) => {
        if (!err) {
            // console.dir(res, { depth: null });
        } else {
            console.log("Error inserting position.");
        }
    });

};


setTimeout(start, 33000);