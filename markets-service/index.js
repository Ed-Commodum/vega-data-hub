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
const { marketEnumMappings } = require('./marketEnums.js');

// const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");
const kafkaBrokers = process.env.KAFKA_BROKERS;

console.log(process.env);

const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
// const kafkaProducer = new kafka.Producer(kafkaClient);
// const kafkaAdmin = new kafka.Admin(kafkaClient);
let kafkaConsumer;

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS markets (
    id TEXT NOT NULL,
    instrument_code TEXT NOT NULL,
    instrument_name TEXT NOT NULL,
    instrument_metadata_tags TEXT NOT NULL,
    future_settlement_asset TEXT NOT NULL,
    future_quote_name TEXT NOT NULL,
    margin_search_level TEXT NOT NULL,
    margin_initial_margin TEXT NOT NULL,
    margin_collateral_release TEXT NOT NULL,
    decimal_places INTEGER,
    trading_mode TEXT NOT NULL,
    state TEXT NOT NULL,
    position_decimal_places INTEGER,
    PRIMARY KEY (id)
);
`;

// `
// SELECT create_hypertable('deposits_withdrawals', 'created_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
// `;

const upsertMarket = `
INSERT INTO markets (
    id,
    instrument_code,
    instrument_name,
    instrument_metadata_tags,
    future_settlement_asset,
    future_quote_name,
    margin_search_level,
    margin_initial_margin,
    margin_collateral_release,
    decimal_places,
    trading_mode,
    state,
    position_decimal_places
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
    $13
) ON CONFLICT (id) DO UPDATE SET (
    id,
    instrument_code,
    instrument_name,
    instrument_metadata_tags,
    future_settlement_asset,
    future_quote_name,
    margin_search_level,
    margin_initial_margin,
    margin_collateral_release,
    decimal_places,
    trading_mode,
    state,
    position_decimal_places
) = (
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
    $13
) RETURNING *;
`;


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
                } else {
                    console.log(err);
                };
            });
        } else {
            console.log(err);
        };
    });

    const topic = [{
        topic: "markets",
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
    kafkaConsumer = new kafka.Consumer(kafkaClient, [{ topic: "markets" }], { groupId: "markets-group" });
    kafkaConsumer.on("message", (msg) => {

        const dateTime = new Date(Date.now()).toISOString();
        // console.log(`${dateTime}: New message`);


        if (msg.topic == "markets") {
            
            const evt = JSON.parse(msg.value);
            
            // console.log(evt);
            console.dir(evt, { depth: null });

            if (evt.marketCreated) {
                persistMarket(formatMarket(evt));
            }

            if (evt.marketUpdated) {
                persistMarket(formatMarket(evt));
            }


        }

    });
};


const formatMarket = (evt) => {

    evt.tradingMode = marketEnumMappings.tradingMode[evt.tradingMode];
    evt.state = marketEnumMappings.state[evt.state];

    const row = [
        evt.id,
        evt.tradableInstrument.instrument.code,
        evt.tradableInstrument.instrument.name,
        JSON.stringify(evt.tradableInstrument.instrument.metadata.tags),
        evt.tradableInstrument.instrument.future.settlementAsset,
        evt.tradableInstrument.instrument.future.quoteName,
        evt.tradableInstrument.instrument.marginCalculator.scalingfactors.searchLevel,
        evt.tradableInstrument.instrument.marginCalculator.scalingfactors.initialMargin,
        evt.tradableInstrument.instrument.marginCalculator.scalingfactors.collateralRelease,
        parseInt(evt.decimalPlaces),
        evt.tradingMode,
        evt.state,
        parseInt(evt.positionDecimalPlaces)
    ];

    return row

}

const persistMarket = (row) => {

    pgPool.query(upsertMarket, row, (err, res) => {
        if (!err) {
            // console.dir(res, { depth: null });
        } else {
            console.log("Error inserting Market.");
            console.log(err);
        }
    });

};


setTimeout(start, 38000);