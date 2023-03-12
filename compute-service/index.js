const kafka = require("kafka-node");
const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");

console.log(kafkaBrokers);
const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers[0] });
const kafkaProducer = new kafka.Producer(kafkaClient);
const kafkaAdmin = new kafka.Admin(kafkaClient);
let kafkaConsumer;

let caughtUp = false;
let finishedQueries = false;
let subQueue = [];
let marketData = {
    numTrades: 0,
    volume: 0
};
let lastKnownTimestamp = "";

const processTrades = (trades, marketData, lastKnownTimestamp) => {

    for (let trade of trades) {
        if (BigInt(trade.timestamp) < BigInt(lastKnownTimestamp)) continue;

        marketData.numTrades += 1;
        marketData.volume += parseInt(trade.size);
        lastKnownTimestamp = trade.timestamp;
    }

    console.log(`${trades.length} trades processed.`);

};

const clearSubQueue = () => {
    const trades = [];
    while (subQueue.length) {
        trades.push(subQueue.shift());
    }
    processTrades(trades, marketData, lastKnownTimestamp);
    console.log(marketData);
};

const start = async () => {

    // Create topic for trade data
    const topics = [{
        topic: "trades",
        partitions: 1,
        replicationFactor: 1
    }]
    
    kafkaAdmin.createTopics(topics, (err, result) => {
        if (!err) {
            console.log("Topics created successfully");
            // Set comsumer to trades topic
            const kafkaConsumer = new kafka.Consumer(kafkaClient, [{ topic: "trades" }]);
            kafkaConsumer.on("message", (data) => {
                const msg = JSON.parse(data.value);
                console.log("New message");
                if (msg.event == "NEW_QUERY_TRADES") {
                    processTrades(msg.body.data, marketData, lastKnownTimestamp);
                    console.log("Market Data: ");
                    console.log(marketData);
                }

                if (msg.event == "NEW_SUB_TRADE" && finishedQueries) {
                    subQueue.push(msg.body.data.value);
                    clearSubQueue();
                } else if (msg.event == "NEW_SUB_TRADE") {
                    subQueue.push(msg.body.data.value);
                }

                if (msg.event == "FINISHED_QUERIES") {
                    finishedQueries == true;
                }
            });
        } else {
            console.log(err);
            console.error("Error creating topic.");
        }
    });

};

setTimeout(start, 10000);