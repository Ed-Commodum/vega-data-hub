const nano = require('nanomsg');
const protobuf = require('protobufjs');
const kafka = require('kafka-node');
const { EventEmitter } = require('node:events');
const { busEventTopicMappings, topicBusEventMappings } = require('./busEventTopicMappings.js');
const { busEventTypes } = require('./busEventTypes.js');

class Broker {
  constructor() {
    this.nano = nano;
    this.protobuf = protobuf;
    this.rootPath = __dirname + '/sources/';
    this.eventsPath = 'vega/events/v1/events.proto';
    this.BusEvent;
    this.Order;
    this.msgIndex = 0;
    this.msgCount = 0;
    this.producerEvtBatchCount = 0;
    this.producerEvtBatchLimit = 500;
    this.producerEvtBatchBytes = 0;
    this.producerEvtBatchBytesLimit = 1572864;
    this.payloads = [];
    this.kafkaErrCount = 0;
    this.kafkaErrs = [];

    this.orderCount = 0;
    this.updatedAtArr = [];
    this.createdAtArr = [];

    this.busEventHandler = new EventEmitter();
    this.busEventTopicMappings = busEventTopicMappings;
    this.topicBusEventMappings = topicBusEventMappings;

    this.kafka = kafka;
    this.kafkaClient;
    this.kafkaProducer;

    this.setEventListeners();
    this.loadProtos();
    for (let topic of Object.keys(this.topicBusEventMappings)) this.payloads.push({ topic: topic, messages: [] });

    // console.log(this);

    this.lastBlock = 0;

  }

  setEventListeners() {
    
    this.busEventHandler.on('newEvent', (evt) => {
    
      // if (evt.type == busEventTypes.BUS_EVENT_TYPE_MARKET_DATA) {
      //   console.dir(evt, { depth: null });
      // }

      // console.log(evt);

      if (evt.type == busEventTypes.BUS_EVENT_TYPE_ORDER) {
        this.orderCount += 1;
        // console.log(evt);
        if (evt.order.updatedAt) {
          if (!this.updatedAtArr.includes(evt.order.updatedAt.valueOf())) {
            this.updatedAtArr.push(evt.order.updatedAt.valueOf());
          }
        }
        if (!this.createdAtArr.includes(evt.order.createdAt.valueOf())) {
          this.createdAtArr.push(evt.order.createdAt.valueOf());
        }
         
      }

      if (this.busEventTopicMappings[evt.type]) {

        // Count number of events and total size of UTF-8 encoded payloads
        const evtStr = JSON.stringify(evt);
        const bytes = new TextEncoder().encode(evtStr).length;
        this.producerEvtBatchCount += 1;
        this.producerEvtBatchBytes += bytes;

        this.msgIndex += 1;
        const index = this.msgIndex.valueOf();

        // Group events by topic
        const topic = this.busEventTopicMappings[evt.type];
        this.payloads.find(elem => elem.topic == topic).messages.push(evtStr);

        // Send batch if any of these conditions are met
        if (this.producerEvtBatchCount >= this.producerEvtBatchLimit || this.producerEvtBatchBytes > this.producerEvtBatchBytesLimit || evt.endBlock) {
          
          console.log(`msg #${index}: Total payload bytes estimate: ${this.producerEvtBatchBytes}`);
          console.log(`msg #${index}: Total payload evt count: ${this.producerEvtBatchCount}`);

          this.producerEvtBatchCount = 0;
          this.producerEvtBatchBytes = 0;

          // Prepare payloads
          const payloads = [];
          while (this.payloads.length) payloads.push(this.payloads.shift());
          for (let topic of Object.keys(this.topicBusEventMappings)) this.payloads.push({ topic: topic, messages: [] });

          const t0Send = performance.now(); 
          // Send payloads
          this.kafkaProducer.send(payloads.filter(elem => elem.messages.length != 0), (err, result) => {
            if (!err) {
              // console.log(`Messages sent seccessfully for block ${evt.endBlock.height}`);
              console.log(`Messages sent successfully`);
              console.log(result);
              console.log(`msg #${index}: Total Error count since startup: ${this.kafkaErrCount}`);
              console.log(this.kafkaErrs);
              console.log(`msg #${index}: Time to send: ${performance.now() - t0Send}ms`);
              console.log(`Order count: ---------- ${this.orderCount} ----------`);
              console.log(`Orders waiting to be sent: ${this.payloads.find(elem => elem.topic == "orders").messages.length}`)
              console.log(`Unique order updated_at timestamps: ${this.updatedAtArr.length}`);
              console.log(`Unique order created_at timestamps: ${this.createdAtArr.length}`);
            } else {
              console.log(err);
              this.kafkaErrs.push(err);
              this.kafkaErrCount += 1;
              console.log(this.kafkaErrs);
            }
          });

        }
      }



      // if (this.busEventTopicMappings[evt.type]) {

      //   this.producerEvtBatchCount += 1;
      //   // Group events by topic and batch them in batches of 1000, always send a batch if the endBlock event is recieved.
      //   const topic = this.busEventTopicMappings[evt.type];
      //   this.payloads.find(elem => elem.topic == topic).messages.push(JSON.stringify(evt));

      //   if (this.producerEvtBatchCount == this.producerEvtBatchLimit || evt.endBlock) {
      //     this.producerEvtBatchCount = 0;

      //     // Prepare payloads
      //     const payloads = [];
      //     while (this.payloads.length) payloads.push(this.payloads.shift());
      //     for (let topic of Object.keys(this.topicBusEventMappings)) this.payloads.push({ topic: topic, messages: [] });

      //     // Send payloads
      //     this.kafkaProducer.send(payloads.filter(elem => elem.messages.length != 0), (err, result) => {
      //       if (!err) {
      //         // console.log(`Messages sent seccessfully for block ${evt.endBlock.height}`);
      //         console.log(`Messages sent successfully`);
      //         console.log(result);
      //         console.log(`Total Error count since startup: ${this.kafkaErrCount}`);
      //         console.log(this.kafkaErrs);
      //       } else {
      //         console.log(err);
      //         this.kafkaErrs.push(err);
      //         this.kafkaErrCount += 1;
      //         console.log(this.kafkaErrs);
      //       }
      //     });

      //   }
      // }
  
    });

  }

  loadProtos() {

    this.root = new this.protobuf.Root();
    
    // Modify resolvePath method to load the protos with our directory structure
    this.root.resolvePath = (origin, target) => {
      console.log(`origin: ${origin}, target: ${target}`);
      return this.rootPath + target;
    };

    this.root.loadSync(this.eventsPath);
    this.BusEvent = this.root.lookupType('vega.events.v1.BusEvent');
    this.Order = this.root.lookupType('vega.Order');
    
  }

  recieve = (msg) => {

    this.msgCount += 1;

    // Decode message and convert to object with longs as strings
    const event = this.BusEvent.toObject(this.BusEvent.decode(msg), { longs: String }); //, enums: String, defaults: true, oneofs: true });

    // console.log(event);

    // const reader = protobuf.Reader.create(msg);
    // const evt = this.BusEvent.decode(reader);
    // console.log(evt);

    // if (evt.order) {
    //   const orderObj = this.Order.toObject(evt.order, { longs: String });
    //   console.log(orderObj);

    //   console.log(evt.order.createdAt);
    //   console.log(evt.order.createdAt.toString());
    // }

    // console.log(event);
    // console.log(this.msgCount);
    const block = event.id.split('-')[0];
    
    if (this.lastBlock < parseInt(block)) {
      console.log(block);
      console.log(this.msgCount);
      this.lastBlock = parseInt(block);
    }

    // Pass message to busEventHandler
    this.busEventHandler.emit('newEvent', event);

  }

  start = () => {

    // Connect to kafka and instantiate producer
    this.kafkaClient = new this.kafka.KafkaClient({ kafkaHost: process.env.KAFKA_BROKERS });
    this.kafkaProducer = new this.kafka.Producer(this.kafkaClient);

    // Start socket server
    const pair = this.nano.socket('pair');
    pair.rcvbuf(314572800);
    const addr = 'tcp://0.0.0.0:3005';
    pair.bind(addr);
    pair.on('data', this.recieve);

  }

}

module.exports = {
  Broker
}