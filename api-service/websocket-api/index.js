
// The Websocket streaming API aims to offer most of the standard API endpoints as streams
// that will send live block-by-bock updates to the user.


// Potential workflow:
// -- User sends array of payloads, each payload is a json object describing the desired stream.
// -- API service parses payloads to determine which streams to request from the streaming-API.
// -- Every new unique payload is given a unique ID.
// -- The streaming API checks to see if streams for the requested payloads are already running.
//      - If they are running then duplicate the data from that stream.
//      - Else start the corresponding stream.
// -- API sends the user all the requested streams zipped into one.


// We might want to export the whole thing as a class or two and import the service into the API service.
// If the API servers struggle then consider separating the streaming API into it's own service, at this
// stage it may even be worthwhile to write it in Go

const express = require('express');
const { Client, Pool } = require('pg');
const format = require('pg-format');
const ws = require('ws');
const { Kafka } = require('kafkajs');
const { EventEmitter } = require('node:events');
const { streamQueries } = require('./streamQueries');

const pgPool = new Pool({
    host: process.env.TIMESCALEDB_HOST,
    port: process.env.TIMESCALEDB_PORT,
    database: 'postgres',
    user: 'postgres',
    password: 'ilovetimescaledb'
});

const kafkaBrokers = process.env.KAFKA_BROKERS;
const streamHandler = new EventEmitter();
const persistanceStatusMap = {};
const streamsRequiredTopics = [ 'trades' ] // , 'orders', 'transfers', 'market_data'];


const blockQueue = [];

const x = {
    height: 0,
    inProgressTopics: [],
    doneTopics: {}
}



streamHandler.on('finishedHeight', async (height) => {
    // Aggregate data for all active streams
    const data = `{ height: ${height}, volume: "123" }`;

    // const streams = [];
    // streams.forEach(async (stream) => {
    //     const res = await stream.query();
    // });

    // const res = await asyncQuery( ...streamQueries.volume(), pgPool);


    // When height is finished, send data
    streamHandler.wsServer.clients.forEach((client) => {
        if (client.readyState == WebSocket.OPEN) {
            client.send(data);
        }
    })


});

const main = () => {

    // Connect kafka
    const kafka = new Kafka({ clientId: 'websocket-api', brokers: [kafkaBrokers] });
    const kafkaConsumer = new kafka.Consumer({ groupId: 'websocket-api-group', maxBytesPerPartition: 2 * 1024 * 1024 });

    // Connect to postgres.
    pgPool.connect((err) => {
        if (err) {
            console.log(err);
        }
    });

    // Start websocket server
    const [ app, wsServer ] = createAPIServer();
    streamHandler.wsServer = wsServer;

    // Sub to block insert notifications
    // Sub to block updates from kafka topic
    kafkaConsumer.subscribe({ topic: 'blocks', partition: 0 }, { topic: 'persistence_status', partition: 0 });
    kafkaConsumer.run({
        eachMessage: async (msg) => {
            console.log(msg);
            const evt = JSON.parse(msg.value);

            // On BeginBlock, wait for confirmations for each set of inserts.
            if (evt.Event.BeginBlock) {
                console.log("Begin Block!!!");

                blockQueue.push(
                    {
                        height: evt.Event.BeginBlock.height,
                        inProgressTopics: streamsRequiredTopics.valueOf(),
                        doneTopics: {}
                    }
                );

                // Start collecting block insert notifications for height.

                // Once all inserted, perform aggregates.

                // Send result.


            }

            // On EndBlock, wait 200ms then push data to streams whether it is ready or not.
            // Replace missing values with null.
            if (evt.Event.EndBlock) {
                console.log("End Block!!!");

            }

            if (msg.topic == 'persistence_status') {
                if (!Object.keys(persistanceStatusMap).includes(height)) {
                    persistanceStatusMap[height] = {};
                }
                persistanceStatusMap[evt.height][evt.topic] = evt.status;
                if (Object.keys(persistanceStatusMap[evt.height]) == streamsRequiredTopics.length) {
                    streamHandler.emit('finishedHeight', evt.height);
                }

            }

        }
    });


};


const createAPIServer = () => {

    const app = express();
    const PORT = 8081;
    const server = app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
    });

    const wsServer = new ws.Server({server, path: '/ws'});

    wsServer.on('connection', (socket) => {
        console.log(`Connected clients: ${wsServer.clients.size}`);
        app.locals.clients = wsServer.clients;
    });

    wsServer.on('message', (msg) => {
        // Parse the payloads to determine the requested streams

        // Create the stream if it does not already exists.

        // Start the stream if it is not already active.

        // Assign the requested streams to the client.

    });

    return [ app, wsServer ] ;
};


main();

// const app = express();

// const wsServer = new ws.Server({ noServer: true });

// wsServer.on('connection', (socket) => {
//     socket.on('message', (message) => {
//         console.log('Message received on WebSocket server.');
//         console.log(message);
//     });
// });

// const PORT = 8081;
// const server = app.listen(PORT, () => {
//     console.log(`Server running on port: ${PORT}`)
// });

// server.on('upgrade', (request, socket, head) => {
//     wsServer.handleUpgrade(request, socket, head, (socket) => {
//         wsServer.emit('connection', socket, request);
//     });
// });

payloads = [
    {
        type: 'volume',
        marketId: null,
        interval: null,
        partyId: "c8sf..."
    },
    {
        type: 'volume-rolling',
        marketId: 'nm39...',
        interval: 'INTERVAL_ROLLING_2H',
        partyId: 'c8sf...'
    },
    {
        type: 'historical-volume',
        marketId: '7ad31...',
        interval: 'INTERVAL_1D',
        partyId: null,
        limit: null
    },
]

module.exports = { main };