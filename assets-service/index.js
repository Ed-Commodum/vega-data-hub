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
CREATE TABLE IF NOT EXISTS assets (
    
);
`;

// `
// SELECT create_hypertable('deposits_withdrawals', 'created_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
// `;

const insertAsset = `
INSERT INTO assets (
    
) values (

);
`;

const upsertAsset = `
INSERT INTO assets (
    
) values (
    
) ON CONFLICT () DO UPDATE SET (

) = (
    
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
        topic: "assets",
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
    kafkaConsumer = new kafka.Consumer(kafkaClient, [{ topic: "assets" }], { groupId: "assets-group" });
    kafkaConsumer.on("message", (msg) => {

        const dateTime = new Date(Date.now()).toISOString();
        // console.log(`${dateTime}: New message`);


        if (msg.topic == "assets") {
            
            const evt = JSON.parse(msg.value);

            console.log(evt);

        }

    });
};


const persistAsset = (evt) => {

    const row = [

    ];

    pgPool.query(insertAsset, row, (err, res) => {
        if (!err) {
            // console.dir(res, { depth: null });
        } else {
            console.log("Error inserting asset.");
        }
    });

};


setTimeout(start, 38000);