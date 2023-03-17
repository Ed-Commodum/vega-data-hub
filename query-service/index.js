const kafka = require("kafka-node");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { EventEmitter } = require("node:events");

const grpc_urls = ["api.n06.testnet.vega.xyz:3007","api.n07.testnet.vega.xyz:3007","api.n08.testnet.vega.xyz:3007","api.n09.testnet.vega.xyz:3007", "api.n10.testnet.vega.xyz:3007"];        
const testnet2GrpcUrls = [
  "grpc.venom.tm.p2p.org:443",
  "api-n00.validators-testnet.vega.rocks:3007",
  "api-n02.validators-testnet.vega.rocks:3007",
  "api-n03.validators-testnet.vega.rocks:3007",
  "api-n04.validators-testnet.vega.rocks:3007",
  "api-n05.validators-testnet.vega.rocks:3007",
  "vega-testnet.anyvalid.com:3007",
  "testnet.grpc.vega.xprv.io:443",
  "vega-testnet.nodes.guru:3007",
  "testnet.vega.greenfield.xyz:3007"
];
console.log(__dirname);
const protoPath = __dirname + "/sources/data-node/api/v2/trading_data.proto";
console.log(protoPath);
const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");

const packageDefinition = protoLoader.loadSync(protoPath, {
    keepCase: true, 
    longs: String, 
    enums: String, 
    defaults: true, 
    oneofs: true, 
    includeDirs: [ __dirname + "/sources" ]
});
const datanode = grpc.loadPackageDefinition(packageDefinition).datanode.api.v2;
const tradingDataService = new datanode.TradingDataService(grpc_urls[1], grpc.credentials.createInsecure());

class TDSClients {
    constructor(grpc, datanode) {
        this.grpc = grpc;
        this.datanode = datanode;
        this.clients = [];
        this.value = null;
        this.limit = 0;
    }
    
    add(url) {
        this.clients.push(new this.datanode.TradingDataService(url, this.grpc.credentials.createInsecure()));
        this.limit += 1;
    }
    
    query() {
        if (this.value == null) {
            this.value = 0;
            console.log(this.clients[this.value].getChannel().getTarget());
            return this.clients[this.value];
        }

        this.value = (this.value + 1) % this.limit;
        console.log(this.clients[this.value].getChannel().getTarget());
        return this.clients[this.value];
    };
};

const tradingDataServiceClients = new TDSClients(grpc, datanode);

// for (let url of grpc_urls) {
//     tradingDataServiceClients.add(url);
// };

for (let url of testnet2GrpcUrls) {
    tradingDataServiceClients.add(url);
};


const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers[0] });
const kafkaProducer = new kafka.Producer(kafkaClient);
const kafkaAdmin = new kafka.Admin(kafkaClient);

const marketId = "10c7d40afd910eeac0c2cad186d79cb194090d5d5f13bd31e14c49fd1bded7e2";

let lastKnownTradeCursor;

const queryHandler = new EventEmitter();

let tradesQueried = 0;
let tradeMessagesSent = 0;
let tradeMessagesSucessful = 0;
let tradeMessagesFailed = 0;
let resetQueries = false;

queryHandler.on("NEW_QUERY_TRADES", (trades) => {
    console.log(`Sending ${trades.length} trades to topic: 'trades'`);
    console.log(`${tradesQueried} trades queried, ${tradeMessagesSent} trade messages sent and ${tradeMessagesSucessful} successful so far...`);

    while (trades.length) {
        const batch = [];
        for (let i=0; i<100; i++) {
            if (!trades.length) {
                break;
            };
            const trade = trades.shift();
            batch.push(trade.node);
        };
        const message = JSON.stringify({ event: "NEW_QUERY_TRADES", body: { data: batch } });
        kafkaProducer.send([{ topic: "trades", messages: message}], (err, result) => {
            if (!err) {
                tradeMessagesSucessful += 1;
            } else {
                console.log(err);
            };
        });
        tradeMessagesSent += 1;
    };
});

queryHandler.on("FINISHED_QUERIES", () => {
    const message = { event: "FINISHED_QUERIES" };
    kafkaProducer.send([{ topic: "trades", messages: JSON.stringify(message) }], (err, result) => {
        if (!err) {
            console.log("Message sent");
        } else {
            console.log(err);
        }
    });
});


const queries = () => {

    const query = (pagination, callback) => {
        // const listTradesReq = { market_id: marketId.valueOf(), pagination: pagination };
        const listTradesReq = { pagination: pagination };
        tradingDataServiceClients.query().ListTrades(listTradesReq, (err, res) => {
            if (!err) {
                console.log("Successful query");
                // console.log(res);
                console.log(`${res.trades.edges.length} trades queried`);
                tradesQueried += res.trades.edges.length;
                callback(err, res)
            } else {
                // console.log(err);
                // console.log(pagination);
                callback(err, res);
            };
        });
    };

    const tasks = [];
    const pagination = { first: 7000, after: lastKnownTradeCursor, newest_first: false };
    tasks.push(pagination);

    const serialQueries = (pagination) => {
        if (resetQueries) {
            resetQueries = false;
        };
        if (pagination) {
            query(pagination, (err, result) => {
                if (!err) {
                    queryHandler.emit("NEW_QUERY_TRADES", result.trades.edges);
                    if (result.trades.page_info.has_next_page == true) {
                        pagination['after'] = result.trades.page_info.end_cursor;
                        tasks.push(pagination);
                    };

                    if(tradesQueried >= 25000) {
                        resetQueries = true;
                        return;
                    }

                    return serialQueries(tasks.shift());
                } else {
                    console.log(err);
                    tasks.push(pagination);
                    return serialQueries(tasks.shift());
                }
            });
        } else {
            console.log("All records queried");
            queryHandler.emit("FINISHED_QUERIES");
        };
    };

    // Start Queries:
    serialQueries(tasks.shift());

    setInterval(() => {
        if(resetQueries) {
            serialQueries(tasks.shift());
        };
    }, 5000);

};

const start = async () => {
    // Get MarketIds
    const getMarketsGRPC = () => {
        return new Promise((resolve, reject) => {

            let markets = {};
            let marketIds = [];

            tradingDataService.ListMarkets({}, (err, res) => {
                if (!err) {
                    for (let edge of res.markets.edges) {
                        validMarketStates = ["STATE_ACTIVE", "STATE_SUSPENDED", "STATE_CLOSED", "STATE_TRADING_TERMINATED", "STATE_SETTLED"]
                        if (validMarketStates.includes(edge.node.state)) {
                            markets[edge.node.id] = edge.node;
                            marketIds.push(edge.node.id);
                        };
                    };
                    resolve([ markets, marketIds ]);
                } else {
                    console.log(err);
                    console.log(res);
                    throw new Error("Error getting markets");
                };
            });
        });
    };

    const [ markets, marketIds ] = await getMarketsGRPC();

    // Begin subscription for trades on market
    // const observeTradesReq = { market_id: marketId.valueOf() };
    const observeTradesReq = {};
    const tradeStream = tradingDataService.ObserveTrades(observeTradesReq);
    tradeStream.on("data", (data) => {
        console.log(`${new Date(Date.now()).toISOString()}: New subscription trades(s):`);
        for (let trade of data.trades) {
            const message = { event: "NEW_SUB_TRADE", body: { data: trade } };
            kafkaProducer.send([{ topic: "trades", messages: JSON.stringify(message) }], (err, result) => {
                if (!err) {
                    // Fucking blessing
                } else {
                    console.log(err);
                };
            });
        };
    });

    tradeStream.on('error', (err) => {
        console.log(new Date(Date.now()).toISOString());
        console.dir(err, { depth: null });;
    });

    tradeStream.on('end', () => {
        console.log(new Date(Date.now()).toISOString());
        console.log("Trade Stream closed");
    });

    tradeStream.on('status', (status) => {
        console.dir(status, { depth: null });
    });


    // Begin subscription for position updates on market_id

    const positionStream = tradingDataService.ObservePositions({});

    positionStream.on("data", (data) => {
        console.log(`${new Date(Date.now()).toISOString()}: New positions data`);

        if (data.snapshot) {

            // for (let pos of dataObj.snapshot.positionsList) {
            //     console.log(`${pos.marketId}, ${pos.partyId}, ${pos.updatedAt}`);
            // }

            const message = { event: "POSITIONS_SNAPSHOT", body: { data: data } };
            kafkaProducer.send([{ topic: "position_updates", messages: JSON.stringify(message) }], (err, result) => {
                if (!err) {
                    console.log("Positions snapshot sent");
                } else {
                    console.error(err);
                };
            });

        } else if (data.updates) {

            console.log("New Updates");
            
            // for (let pos of dataObj.updates.positionsList) {
            //     console.log(`${pos.marketId}, ${pos.partyId}, ${pos.updatedAt}`);
            // }
            
            const message = { event: "POSITIONS_UPDATES", body: { data: data } };
            kafkaProducer.send([{ topic: "position_updates", messages: JSON.stringify(message) }], (err, result) => {
                if (!err) {
                    console.log("Positions updates sent");
                } else {
                    console.error(err);
                };
            });

        };

    });

    positionStream.on('error', (err) => {
        console.log(new Date(Date.now()).toISOString());
        console.dir(err, { depth: null });
    });

    positionStream.on('end', () => {
        console.log(new Date(Date.now()).toISOString());
        console.log("Position Stream closed");
    });

    positionStream.on('status', (status) => {
        console.dir(status, { depth: null });
    });

    // Begin trade queries
    queries();
};

setTimeout(start, 33000);

// setInterval(() => {
//     let usage = process.memoryUsage();
//     console.log('Mem usage: ' + usage.rss + ',' + usage.heapTotal + ',' + usage.heapUsed + ',' + usage.external);
// }, 5000);

