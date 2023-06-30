const { Client, Pool } = require('pg');

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
const { assetEnumMappings } = require('./assetEnums.js');

// const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");
const kafkaBrokers = process.env.KAFKA_BROKERS;

console.log(process.env);

const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
// const kafkaProducer = new kafka.Producer(kafkaClient);
// const kafkaAdmin = new kafka.Admin(kafkaClient);
let kafkaConsumer;

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS assets (
    id TEXT NOT NULL,
    status TEXT NOT NULL,
    name TEXT NOT NULL,
    symbol TEXT NOT NULL,
    decimals INTEGER,
    quantum NUMERIC,
    erc20_contract_addr TEXT,
    erc20_lifetime_limit TEXT,
    erc20_withdraw_threshold TEXT,
    PRIMARY KEY (id)
);
`;

// `
// SELECT create_hypertable('deposits_withdrawals', 'created_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
// `;

const upsertAsset = `
INSERT INTO assets (
    id,
    status,
    name,
    symbol,
    decimals,
    quantum,
    erc20_contract_addr,
    erc20_lifetime_limit,
    erc20_withdraw_threshold
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9
) ON CONFLICT (id) DO UPDATE SET (
    id,
    status,
    name,
    symbol,
    decimals,
    quantum,
    erc20_contract_addr,
    erc20_lifetime_limit,
    erc20_withdraw_threshold
) = (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9
) RETURNING *;
`;


const start = () => {

    // Connect to Kafka.
    const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
    const kafkaAdmin = new kafka.Admin(kafkaClient);

    // Connect to postgres.
    pgClient.connect((err) => {
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
                    kafkaAdmin.createTopics([{ topic: "assets", partitions: 1, replicationFactor: 1 }], (err, result) => {
                        if (!err) {
                            console.log("Topics created successfully");
                            // Set up consumer
                            setConsumer(kafkaConsumer);
                        } else {
                            console.log(err);
                        }
                    });
                } else {
                    console.log(err);
                };
            });
        } else {
            console.log(err);
        };
    });
};

const setConsumer = (kafkaConsumer) => {
    kafkaConsumer = new kafka.Consumer(kafkaClient, [], { groupId: "assets-group-23" });
    kafkaConsumer.on("message", (msg) => {
        // const dateTime = new Date(Date.now()).toISOString();
        // console.log(`${dateTime}: New message`);
        if (msg.topic == "assets") {    
            const evt = JSON.parse(msg.value);
            if (evt.Event.Asset) {
                console.dir(evt, {depth: null});
                if (evt.Event.Asset.details.Source.Erc20) {
                    persistAsset(formatAsset(evt.Event.Asset));
                };
            };
        };
    });
    kafkaConsumer.addTopics([{ topic: 'assets', offset: 0 }], () => console.log("topic added"));
};


const formatAsset = (evt) => {

    evt.status = assetEnumMappings.status[evt.status];
    console.log(evt.status);

    const row = [
        evt.id, evt.status, evt.details.name, evt.details.symbol, parseInt(evt.details.decimals),
        evt.details.quantum, evt.details.Source.Erc20.contract_address, evt.details.Source.Erc20.lifetime_limit,
        evt.details.Source.Erc20.withdraw_threshold
    ];

    return row

}

const persistAsset = (row) => {

    pgClient.query(upsertAsset, row, (err, res) => {
        if (!err) {
            // console.dir(res, { depth: null });
        } else {
            console.log("Error upserting asset.");
            console.log(err);
        }
    });

};


setTimeout(start, 38000);