const express = require('express');
const { Client, Pool } = require('pg');
const format = require('pg-format');
const ws = require('ws');
const { Kafka } = require('kafkajs');
const { EventEmitter } = require('node:events');
const { streamQueries } = require('./streamQueries');
const { RingBuffer, RecentBlocks } = require('../../utils/ringBuffers.js')
const { payloadParsers, asyncQuery } = require('./streamQueries.js');
const crypto = require('crypto');


class Stream {
    constructor(payload) {
        this.payload = payload;
        this.streamId = this.buildStreamId(payload);
        [ this.query, this.queryParams ] = this.getQuery(payload);
        this.active = false;
        this.updating = false;
        this.subscribers = [];
        this.data = {};
        
    }

    static getStreamId(payload) {

        const str = '';

        const properties = [ 'type', 'mode', 'marketId', 'partyId', 'assetId', 'interval', 'limit', 'windowSize', 'confidenceInterval' ];

        for (let prop of properties) {
            const value = payload[prop];
            if (value != undefined) {
                id = id + String(value);
            }
        }

        const hash = crypto.createHash('sha256')
            .update(str)
            .digest('hex');

        console.log(hash);

        return hash;
    }

    buildStreamId(payload) {

        const str = '';

        const properties = [ 'type', 'mode', 'marketId', 'partyId', 'assetId', 'interval', 'limit', 'windowSize', 'confidenceInterval' ];

        for (let prop of properties) {
            const value = payload[prop];
            if (value != undefined) {
                id = id + String(value);
            }
        }

        const hash = crypto.createHash('sha256')
            .update(str)
            .digest('hex');

        console.log(hash);

        return hash;
    }

    getQuery(payload) {
        return payloadParsers[payload.type](payload);
    }

    async update(pgPool) {

        this.updating = true;
        const res = await asyncQuery(this.query, ...this.queryParams, pgPool);
        this.updating = false;

        console.log(`Query res for stream ${this.streamId}: `);
        console.log(res);
        
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

        this.streamIds = [];
        this.activeStreamIds = [];
        this.streams = {};
        this.wsClients = [];
        this.subscribers = [];

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
            
            socket.on('message', () => {

            });

            socket.on('close', () => {
                
            });

            this.wsClients = wsServer.clients;
        });

        wsServer.on('close', (msg) => {


            this.wsClients = wsServer.clients;
        });

        wsServer.on('message', (msg) => {
            // Parse the payloads to determine the requested streams.
            for (let payload of msg.payloads) {
                
                const id = Stream.getStreamId(payload);

                if (this.activeStreamIds.includes(id)) {
                    // Allocate the stream to client


                } else {
                    // Create the stream then allocate it to client.
                    this.streams[id] = new Stream(payload);

                    this.handleSubscription()

                }

            }

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
            this.store.push({ height: height, pending: [...this.topics], success: [], failure: [], sent: false });

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

        if (this.store.get(height).sent) {
            return;
        }

        const failedTopics = this.store.get(height).failure;
        const unfinishedTopics = this.store.get(height).pending;
        
        if (!failedTopics.length == 0 || !unfinishedTopics.length == 0) {
            // Determine which streams cannot be refreshed, return null for those streams.

        }

        // Run stream queries/aggregations.
        for (let streamId of this.activeStreamIds) {
            this.streams[streamId].update();
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
