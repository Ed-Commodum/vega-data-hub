const express = require('express');
const { Client, Pool } = require('pg');
const format = require('pg-format');
const ws = require('ws');
const { Kafka } = require('kafkajs');
const { EventEmitter } = require('node:events');
const { streamQueries } = require('./streamQueries');
const { RingBuffer, RecentBlocks } = require('../../utils/ringBuffers.js')



class Stream {
    constructor(payload) {
        this.payload = payload;
        this.streamId = this.getStreamId(payload);
        [ this.query, this.queryParams ] = this.getQuery(payload);
        this.active = false;
        this.subscribers = [];
        
    }

    getStreamId(payload) {

        const id = '';

        const properties = [ 'type', 'marketId', 'partyId', 'assetId', 'interval', 'limit', 'windowSize', 'confidenceInterval' ];

        for (let prop of properties) {
            const value = payload[prop];
            if (value != undefined) {
                id = id + String(value);
            }
        }

        return id;
    }

    getQuery(payload) {
        return parsers[payload.type](payload);
    }

    update() {

    }

}


class StreamingAPIServer {
    constructor(expressServer) {

        // Topics for which to track inserts.
        this.topics = [ 'trades', 'transfers', 'markets', 'assets', 'market_data', 'stake_linkings' ]; //, 'orders', 'accounts' ];
        this.store = new RecentBlocks(1000);

        this.sendTimeout;

        this.controller = new EventEmitter();
        this.setControllerHandlers();

        // Connect Kafka
        this.kafka = new Kafka({ clientId: 'websocket-api', brokers: [process.env.KAFKA_BROKERS] });
        this.kafkaConsumer = new this.kafka.Consumer({ groupId: 'websocket-api-group', maxBytesPerPartition: 2 * 1024 * 1024 });

        // Connect postgres
        this.pgPool = new Pool({
            host: process.env.TIMESCALEDB_HOST,
            port: process.env.TIMESCALEDB_PORT,
            database: 'postgres',
            user: 'postgres',
            password: 'ilovetimescaledb'
        });

        // Sub to kafka topics
        this.setKafkaHandler();

        // Start websocket server
        this.startWSServer(expressServer);

    }

    startWSServer(expressServer) {

        const app = express();
        const PORT = 8081;
        expressServer = app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        });

        const wsServer = new ws.Server({expressServer, path: '/ws'});

        wsServer.on('connection', (socket) => {
            console.log(`Connected clients: ${wsServer.clients.size}`);
            app.locals.clients = wsServer.clients;
        });

        wsServer.on('message', (msg) => {
            // Parse the payloads to determine the requested streams.

            // Create the stream if it does not already exists.

            // Start the stream if it is not already active.

            // Assign the requested streams to the client.

        });


    }

    setKafkaHandler() {

        this.kafkaConsumer.subscribe({ topic: 'blocks', partition: 0 }, { topic: 'persistence_status', partition: 0 });
        this.kafkaConsumer.run({
            eachMessage: async (msg) => {
                console.log(msg);
                const evt = JSON.parse(msg.value);

                // On BeginBlock, wait for confirmations for each set of inserts.
                if (evt.Event.BeginBlock) {
                    console.log("Begin Block!!!");
                    this.controller.emit('beginBlock', evt.Event.BeginBlock.height);
                }

                // On EndBlock, wait 200ms then push data to streams whether it is ready or not.
                // Replace missing values with null.
                if (evt.Event.EndBlock) {
                    console.log("End Block!!!");

                }

                if (msg.topic == 'persistence_status') {
                    this.controller.emit('handleNotification', msg);
                }

            }
        });

    }

    setControllerHandlers() {

        this.controller.on('beginBlock', (height) => {

            // Add new height to store
            this.store.push({ height: height, pending: [...this.topics], success: [], failure: [] });

            // Create timeout to send data to subscribers if not all confirmations received in time.
            this.sendTimeout = setTimeout(() => this.sendHeight(height), 300);

        });
        
        this.controller.on('handleNotification', (msg) => {
            
            console.log(msg);

            const pending = this.store.get(msg.height).pending
            const block = this.store.get(msg.height);

            if (msg.status == 'success') {
                block.success.push(...pending.splice(pending.indexOf(msg.topic), 1));
            }

            if (msg.status == 'failure') {
                console.log(`Inserts failed for topic: ${msg.topic} at height: ${msg.height}`);
                block.failure.push(...pending.splice(pending.indexOf(msg.topic), 1));
            }

            if (block.pending.length == 0) {
                clearTimeout(this.sendTimeout);
                this.sendHeight(msg.height);
            }

        });
        
        // this.controller.on('', () => {
            
        // });

    }

    sendHeight(height) {

        const failedTopics = this.store.get(height).failure;
        
        if (!failedTopics.length == 0) {
            // Determine which streams cannot be refreshed, return null for those streams.

        }

        // Run stream queries/aggregations.
        for (let stream of activeStreams) {
            stream.query();
        }
        
        // For each subscriber, send the requested stream data.
        for (let subscriber of this.subscribers) {
            const data = [];
            for (let stream of subscriber.streams) {
                data.push(stream.data());
            }
            subscriber.send(data);
        }
        
    }

    start() {



    }

}
