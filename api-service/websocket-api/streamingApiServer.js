const express = require('express');
const { Client, Pool } = require('pg');
const format = require('pg-format');
const ws = require('ws');
const { Kafka } = require('kafkajs');
const { EventEmitter } = require('node:events');
const { streamQueries } = require('./streamQueries');
// const { RingBuffer, RecentBlocks } = require('../../utils/ringBuffers.js');
const { RingBuffer, RecentBlocks } = require('./ringBuffers.js');
const { payloadParsers, asyncQuery, payloadMetadataNames } = require('./streamQueries.js');
const crypto = require('crypto');

class Subscriber {
    constructor(socket) {
        this.client = socket;
        this.streams = [];
        this.metadata = [];
        this.metadataStr = '';
        this.pendingData = [];
        this.resolvedData = [];
        this.updating = false;
        this.replaying = false;
        this.lastSentHeight = -1;
    }

    startReplay(payloads) {
        // Mark subscriber as replaying to block live stream updates.
        this.replaying = true;

        // Replay API will query chunks of data to be sent as multiple messages, one message per interval.
        for (let payload of payloads) {

            
        }


        // If subscriber has no active streams after replay, close socket to delete subscriber.

    }

    getData(height, pgPool) {
        this.updating = true;
        for (let stream of this.streams) {
            if (stream.recentHeight == height) {

            }
            console.log("Subscriber.getData() block");
            this.pendingData.push(stream.getDataAsync(pgPool));
        }
    }

    async sendAsync(height, vegaTime) {
        // For now this version just sends the raw data from the postgres query.
        // Later on will use payload types to isolate stream data and metadata.

        console.log("Pending data arr length: ", this.pendingData.length);
        if (this.pendingData.length > this.streams.length) throw new Error("Subscriber has too much data pending relative to it's number of streams.");
        const msg = [];
        const metadata = [];
        console.dir(this.pendingData, {depth:null});
        
        let startTime = performance.now();
        await Promise.allSettled(this.pendingData.map((elem) => elem.promise))
        console.log(`${performance.now() - startTime} ms`);

        console.log(this.pendingData);
        await new Promise(async (res, rej) => {
            for (let i=0; i<this.pendingData.length; i++) {
                this.pendingData[i].data = await this.pendingData[i].promise;
                delete this.pendingData[i].promise;
                this.resolvedData.push(this.pendingData[i]);
            }
            res();
        });
        
        console.log(this.resolvedData);

        for (let stream of this.resolvedData) {
            console.dir(stream, {depth:null});
            const [ payloadType, payloadMode, payloadInterval ] = [ stream.payloadType, stream.payloadMode, stream.payloadInterval ];
            console.log("Payload Type: ", payloadType);
            msg.push({ blockHeight: height },{ vegaTime: vegaTime });
            metadata.push({ type: 'Block height' }, { type: 'Vega time' });
            if (stream.data.length == 0) {
                msg.push({ [payloadType]: null });
            }
            for (let datum of stream.data) {
                // Separate datapoint and metadata from raw data obj
                const metadatum = {};
                const metadataNames = payloadMetadataNames[payloadType][payloadMode];

                metadatum.type = payloadType;
                metadatum.mode = payloadMode;
                if (payloadInterval) {
                    metadatum.interval = payloadInterval;
                };

                for (let key of Object.keys(datum)) {
                    if (metadataNames.includes(key)) {
                        metadatum[key] = datum[key].valueOf();
                        delete datum[key];
                    }
                }

                msg.push({ [payloadType]: datum[payloadType] });
                metadata.push(metadatum);
            }
        }
        console.log("Message: ", msg);
        console.log("Metadata: ", metadata);
        this.metadata = metadata;
        this.updating = false;
        if (this.lastSentHeight >= height) {
            this.pendingData.length = 0;
            this.resolvedData.length = 0;
            return;
        }
        if (this.client.readyState === ws.WebSocket.OPEN) {

            // Determine whether the metadata has changed.
            const metadataStr = JSON.stringify(metadata);
            if (this.metadataStr != metadataStr) {
                console.log("Detected metadata change.");
                this.metadataStr = metadataStr;
                this.client.send(this.metadataStr + '\n');
            }

            // this.client.send(JSON.stringify({ height: height, data: msg }) + '\n');
            this.client.send(JSON.stringify(msg) + '\n');
            this.lastSentHeight = height;
            this.pendingData.length = 0;
            this.resolvedData.length = 0;
        }

        // console.log("Pending data arr length: ", this.pendingData.length);
        // if (this.pendingData.length > this.streams.length) throw new Error("Subscriber has too much data pending raltive to it's number of streams.");
        // const msg = [];
        // const results = await Promise.allSettled(this.pendingData);
        // for (let res of results) msg.push(...res.value);
        // this.updating = false;
        // if (this.lastSentHeight >= height) {
        //     this.pendingData.length = 0;
        //     return;
        // }
        // if (this.client.readyState === ws.WebSocket.OPEN) {
        //     this.client.send(JSON.stringify({ height: height, data: msg }) + '\n');
        //     this.lastSentHeight = height;
        //     this.pendingData.length = 0;
        // }
    }

    forceSend(height) {
        // Called when the stream data is not fetched in time.
        
        console.log("Force send triggered");

        for (let datum of this.pendingData) {
            console.log(datum);
        }
        this.lastSentHeight = height;
        this.pendingData.length = 0;
    }
}

class Stream {
    constructor(payload) {
        this.payload = payload;

        this.streamId = this.buildStreamId(payload);
        [ this.query, this.queryParams ] = this.getQuery(payload);
        this.active = false;
        this.updating = false;
        this.updateMetadata;
        this.subCount = 0;
        this.subscribers = [];
        this.store = {
            timestamp: '',
            data: [],
            metadata: []
        };
        
    }

    // Write func to verify payload, requests with invalid payloads should be rejected.
    static verifyPayload(payload) {

        // Check type and mode are valid

        // Check for missing mandatory fields

        // Check for fields that should not exist

        // Check for requests for inactive markets

        // Check for non-existant assets

        // Check for invalid confidenceInterval

    }

    static getStreamId(payload) {

        let str = '';

        // Convert replay mode to historical.
        if (payload.mode == 'replay') {
            payload.mode == 'historical';
        }

        const properties = [ 'type', 'mode', 'marketId', 'partyId', 'assetId', 'interval', 'limit', 'windowSize', 'confidenceInterval' ];

        for (let prop of properties) {
            const value = payload[prop];
            if (value != undefined) {
                str = str + String(value);
            }
        }

        const hash = crypto.createHash('sha256')
            .update(str)
            .digest('hex');

        console.log(hash);

        return hash;
    }

    buildStreamId(payload) {

        let str = '';

        // Convert replay mode to historical.
        if (payload.mode == 'replay') {
            payload.mode = 'historical';
        }

        const properties = [ 'type', 'mode', 'marketId', 'partyId', 'assetId', 'interval', 'limit', 'windowSize', 'confidenceInterval' ];

        for (let prop of properties) {
            const value = payload[prop];
            if (value != undefined) {
                str = str + String(value);
            }
        }

        const hash = crypto.createHash('sha256')
            .update(str)
            .digest('hex');

        console.log(hash);

        return hash;
    }

    getQuery(payload) {
        return payloadParsers[payload.type][payload.mode](payload);
    }

    getMetadata(rows) {
        // NOTE: Consider adding metadata types for each payload type to streamQueries.js

        const metadata = [];
        for (let i=0; i<rows.length; i++) {
            metadata.push({ index: i, market_id: rows[i].market_id });
        }

        return metadata;
    }

    getDataAsync(pgPool) {
        // this.updating = true;
        
        // const prom = asyncQuery(this.query, this.queryParams, pgPool);
        // const res = { promise: prom, payloadType: this.payload.type, payloadMode: this.payload.mode };
        // console.log(res);

        const prom = asyncQuery(this.query, this.queryParams, pgPool);

        let res;
        if (this.payload.interval) {
            res = { promise: prom, payloadType: this.payload.type, payloadMode: this.payload.mode, payloadInterval: this.payload.interval };
        } else {
            res = { promise: prom, payloadType: this.payload.type, payloadMode: this.payload.mode };
        }

        console.log(res);
        

        // NOTE: Sometimes the number of rows for a query can change. eg; a new market gets
        //       enacted and it is a valid market for the stream query, it's results will be
        //       added to the stream data. When this occurs we MUST update the metadata to
        //       reflect this and send a metadata update to the relevant subscribers.
        //
        // Potential Solutions:
        //  - Hash the metadata and save the hash on the stream, can use this to detect changes
        //    in metadata. Downside is computational cost of hash function.
        //  - Concat the metadata into a string and use comparison to detect metadata changes.
        //

        // const metadata = this.getMetadata(res.rows);
        return res;
    }

}


class StreamingAPIServer {
    constructor(expressServer) {

        this.serviceReady = false;

        // Topics for which to track inserts.
        // this.topics = [ 'trades', 'transfers', 'markets', 'assets', 'market_data', 'stake_linkings' ]; //, 'orders', 'accounts' ];
        this.topics = ['trades'];
        this.store = new RecentBlocks(50000);

        this.sendTimeout;
        this.staleHeight = -1; // Height at which to ignore notifications from persistence services.

        this.controller = new EventEmitter();
        this.setControllerHandlers();

        this.streamIds = [];
        this.activeStreamIds = [];
        this.streams = {};
        this.subscribers = {};

        // Connect Kafka
        console.log(process.env.KAFKA_BROKERS);
        this.kafka = new Kafka({ clientId: 'websocket-api', brokers: [process.env.KAFKA_BROKERS] });
        this.kafkaConsumer = this.kafka.consumer({ groupId: 'websocket-api-group', maxBytesPerPartition: 2 * 1024 * 1024 });
        this.kafkaAdmin = this.kafka.admin();
        this.kafkaConsumer.connect();
        this.kafkaAdmin.connect();

        // Connect postgres
        this.pgPool = new Pool({
            host: process.env.TIMESCALEDB_HOST,
            port: process.env.TIMESCALEDB_PORT,
            database: 'postgres',
            user: 'postgres',
            password: 'ilovetimescaledb'
        });

        // Start block insertion notification server
        // this.startNotificationServer();

        // Sub to kafka topics
        this.setKafkaHandler();

        // Start websocket server
        this.startWSServer(expressServer);

    }

    startNotificationServer() {

        const app = express();
        const PORT = 1337;
        const expressServer = app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);

            app.post('/block-notification', (req, res) => {
                
                console.log("Recieved POST request: ");
                // console.log(req);

                let body = '';
                req.on('data', (chunk) => {
                    body += chunk.toString();
                })

                req.on('end', () => {
                    // console.log("Data: ");
                    // console.log(body);

                    const msg = JSON.parse(body);

                    if (msg.height <= this.staleHeight) return;

                    console.log("Notification: ", msg);

                    const block = this.store.get(msg.height);
                    if (block == undefined) return;
                    const pending = this.store.get(msg.height).pending

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

                    res.send({ status: "success" });
                })

            });

        });

    }

    startWSServer(expressServer) {

        // ---------- For testing purposes only ---------- //
        // const app = express();
        // const PORT = 8081;
        // expressServer = app.listen(PORT, () => {
        //     console.log(`Server running on port: ${PORT}`)
        // });
        // ----------------------------------------------- //

        const wsServer = new ws.Server({ server: expressServer, path: '/ws' });
        const wsReplayServer = new ws.Server({server: expressServer, path: '/ws/replay' });

        wsServer.on('connection', (socket) => {
            console.log(`Connected clients: ${wsServer.clients.size}`);
            
            // socket.on('open', () => {
            //     // Create new subscriber for client.
            //     const clientId = crypto.randomBytes(16).toString('base64');
            //     socket.clientId = clientId;
            //     const subscriber = new Subscriber(socket);
            //     this.subscribers[clientId] = subscriber;
            // });

            socket.on('close', () => {
                // Update subscriber count on streams, deactivate unused streams, remove subscriber.
                for (let stream of this.subscribers[socket.clientId].streams) {
                    stream.subCount--;
                    if (stream.subCount <= 0) {
                        const index = this.activeStreamIds.indexOf(stream.streamId);
                        this.activeStreamIds.splice(index, 1);
                        stream.active = false;
                    }
                    delete this.subscribers[socket.clientId];
                }

            });

            socket.on('message', (msg) => {

                if (socket.clientId === undefined) {
                    // Create new subscriber for client.
                    const clientId = crypto.randomBytes(16).toString('base64');
                    socket.clientId = clientId;
                    const subscriber = new Subscriber(socket);
                    this.subscribers[clientId] = subscriber;
                }

                console.dir(JSON.parse(msg.toString()));

                // Add functionality to fetch a stream from it's streamId instead of a payload.

                // Parse the payloads to determine the requested streams.
                for (let payload of JSON.parse(msg.toString()).payloads) {

                    const err = Stream.verifyPayload(payload);
                    if (err) {
                        // Send error message to socket.

                        // Close socket

                    }
                    
                    const streamId = Stream.getStreamId(payload);
                    
                    if (this.activeStreamIds.includes(streamId)) {
                        // Allocate the stream to client
                        this.subscribers[socket.clientId].streams.push(this.streams[streamId]);

                    } else {
                        // Create the stream then allocate it to client.
                        this.streams[streamId] = new Stream(payload);

                        // Set to active
                        this.streams[streamId].active = true;
                        this.activeStreamIds.push(streamId);
                        this.subscribers[socket.clientId].streams.push(this.streams[streamId]);
                        this.streams[streamId].subCount++;
                    }

                }

            });

        });

        wsReplayServer.on('connection', (socket) => {
            console.log(`Connected clients: ${wsServer.clients.size}`);
            
            socket.on('close', () => {

                // Update subscriber count on streams, deactivate unused streams, remove subscriber.
                for (let stream of this.subscribers[socket.clientId].streams) {
                    stream.subCount--;
                    if (stream.subCount <= 0) {
                        const index = this.activeStreamIds.indexOf(stream.streamId);
                        this.activeStreamIds.splice(index, 1);
                        stream.active = false;
                    }
                }

                delete this.subscribers[socket.clientId];

            });

            socket.on('message', (msg) => {

                if (socket.clientId === undefined) {
                    // Create new subscriber for client.
                    const clientId = crypto.randomBytes(16).toString('base64');
                    socket.clientId = clientId;
                    const subscriber = new Subscriber(socket);
                    this.subscribers[clientId] = subscriber;
                }

                console.dir(JSON.parse(msg.toString()));

                // Add functionality to fetch a stream from it's streamId instead of a payload.

                const payloads = JSON.parse(msg.toString()).payloads;

                // Parse the payloads to determine the requested streams.
                for (let payload of payloads) {

                    // The replay API only accepts payloads with mode = 'replay'.
                    if (payload.mode != "replay") {
                        // Send err to socket

                        // Close socket

                        console.log("Only \"replay\" mode is supported by the replay API.");
                        return
                    }

                    const err = Stream.verifyPayload(payload);
                    if (err) {
                        // Send error message to socket.

                        // Close socket

                        console.log("Failed to verify payload...");
                        return
                    }
                    
                    // If there is an endTimestamp provided in the payload, we will NOT convert the replay to a
                    // real time data stream.
                    if (!payload.endTimestamp) {
                        continue;
                    }

                    const streamId = Stream.getStreamId(payload);
                    
                    if (this.activeStreamIds.includes(streamId)) {
                        // Allocate the stream to client
                        this.subscribers[socket.clientId].streams.push(this.streams[streamId]);

                    } else {
                        // Create the stream then allocate it to client.
                        this.streams[streamId] = new Stream(payload);

                        // Set to active
                        this.streams[streamId].active = true;
                        this.activeStreamIds.push(streamId);
                        this.subscribers[socket.clientId].streams.push(this.streams[streamId]);
                        this.streams[streamId].subCount++;
                    }

                }

                this.subscribers[socket.clientId].startReplay(payloads);

            });

        });

    }

    async setKafkaHandler() {

        // Get latest offsets
        const blocksOffsets = await this.kafkaAdmin.fetchTopicOffsets('blocks');
        const persistenceStatusOffsets = await this.kafkaAdmin.fetchTopicOffsets('persistence_status');

        this.kafkaConsumer.subscribe({ topics: ['blocks', 'persistence_status'] }); //{ topic: 'blocks', partition: 0 }, { topic: 'persistence_status', partition: 0 });
        this.kafkaConsumer.run({
            eachMessage: async (msg) => {
                // console.log(msg);
                // console.log(typeof msg.message.value)
                // console.log(msg.message.value);
                // console.log(msg.message.value.toString());
                // console.log(Buffer.isBuffer(msg.message.value));
                const evt = JSON.parse(msg.message.value.toString());

                if (msg.topic == 'persistence_status') {
                    this.controller.emit('handleNotification', JSON.parse(msg.message.value.toString()));
                    return;
                }

                // On BeginBlock, wait for confirmations for each set of inserts.
                if (evt.Event.BeginBlock) {
                    // console.log(`Begin Block at height: ${evt.Event.BeginBlock.height}`);
                    this.controller.emit('beginBlock', evt.Event.BeginBlock);
                }

                if (evt.Event.EndBlock) {
                    // console.log(`End Block at height: ${evt.Event.EndBlock.height}`);

                }

            }
        });

        this.kafkaConsumer.seek({ topic: 'blocks', partition: 0, offset: blocksOffsets[0].offset });
        this.kafkaConsumer.seek({ topic: 'persistence_status', partition: 0, offset: persistenceStatusOffsets[0].offset });

        this.kafkaConsumer.on(this.kafkaConsumer.events.HEARTBEAT, (hb) => {
            console.log("Heartbeat: ", hb);
            if (hb.id >= 1) {
                this.serviceReady = true;
            }
        });

    }

    setControllerHandlers() {

        this.controller.on('beginBlock', (evt) => {

            if (!this.serviceReady) return;

            // Add new height to store
            this.store.push({ height: evt.height, timestamp: evt.timestamp, pending: [...this.topics], success: [], failure: [], sent: false });

            // Set send timeout for all subscribers.
            this.sendTimeout = setTimeout(() => {
                this.staleHeight = evt.height;
                for (let sub of Object.values(this.subscribers)) {
                    sub.forceSend(evt.height);
                }
            }, 300);

        });
        
        this.controller.on('handleNotification', (msg) => {
            
            if (!this.serviceReady) return;

            if (msg.height <= this.staleHeight) return;

            console.log("Notification: ", msg);

            const block = this.store.get(msg.height);
            if (block == undefined) return;
            const pending = this.store.get(msg.height).pending

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

    async sendHeight(height) {

        // console.log(height);
        // console.log(typeof(height));
        // console.log(this.store);
        const block = this.store.get(height);
        if (block.sent) {
            return;
        }

        const failedTopics = block.failure;
        const unfinishedTopics = block.pending;
        
        if (!failedTopics.length == 0 || !unfinishedTopics.length == 0) {
            // Determine which streams cannot be refreshed, return null for those streams.
            console.log(`Failed & unfinished topics: `);
            console.log("Failed: ", failedTopics);
            console.log("Unfinished: ", unfinishedTopics);

        }

        // For each subscriber, collect promises for each stream and await data.
        for (let subscriber of Object.values(this.subscribers)) {
            if (subscriber.replaying) {
                continue;
            }
            subscriber.getData(height, this.pgPool);
            subscriber.sendAsync(height, block.timestamp);
        }

        // // Run stream queries/aggregations.
        // for (let streamId of this.activeStreamIds) {
        //     this.streams[streamId].update(this.pgPool);
        // }

        // // If any metadata has changed, send metadata updates to subscribers

        // // For each subscriber, send the requested stream data.
        // for (let subscriber of Object.values(this.subscribers)) {
            
        //     const metadata = [];
        //     const updateMetadata = false;
        //     const msg = { timestamp: block.timestamp, data: [] };

        //     for (let stream of subscriber.streams) {
        //         if (stream.updating) {
        //             // 
        //         }
        //         if (stream.updateMetadata == true) {
        //             updateMetadata = true;
        //         }
        //         metadata.push(...stream.metadata());
        //         msg.data.push(...stream.data());
        //         msg.timestamp = stream.timestamp();
        //     }

        //     if (subscriber.client.readyState === ws.WebSocket.OPEN) {
        //         if (updateMetadata) {
        //             subscriber.client.send(JSON.stringify({ timestamp: block.timestamp, metadata: metadata }));
        //         }
        //         subscriber.client.send(JSON.stringify(msg));
        //     }
        // }

        block.sent = true;
    }
}

module.exports = {
    StreamingAPIServer
};
