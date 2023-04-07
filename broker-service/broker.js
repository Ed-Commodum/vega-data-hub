const nano = require('nanomsg');
const protobuf = require('protobufjs');
const kafka = require('kafka-node');
const { EventEmitter } = require('node:events');
const { busEventTopicMappings, topicBusEventMappings } = require('./busEventTopicMappings.js');
const { busEventTypes } = require('./busEventTypes.js');
const { Console } = require('node:console');

class Broker {
  constructor() {
    this.nano = nano;
    this.protobuf = protobuf;
    this.rootPath = __dirname + '/sources/';
    this.eventsPath = 'vega/events/v1/events.proto';
    this.BusEvent;
    this.msgCount = 0;
    this.producerEvtBatchCount = 0;
    this.producerEvtBatchLimit = 1000;
    this.payloads = [];
    this.kafkaErrCount = 0;
    this.kafkaErrs = [];

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

      if (this.busEventTopicMappings[evt.type]) {

        this.evtBatchCount += 1;
        // Group events by topic and batch them in batches of 1000, always send a batch if the endBlock event is recieved.
        const topic = this.busEventTopicMappings[evt.type];
        this.payloads.find(elem => elem.topic == topic).messages.push(JSON.stringify(evt));

        if (this.producerEvtBatchCount == this.producerEvtBatchLimit || evt.endBlock) {
          this.evtBatchCount = 0;

          // Prepare payloads
          const payloads = [];
          while (this.payloads.length) payloads.push(this.payloads.shift());
          for (let topic of Object.keys(this.topicBusEventMappings)) this.payloads.push({ topic: topic, messages: [] });

          // Send payloads
          this.kafkaProducer.send(payloads.filter(elem => elem.messages.length != 0), (err, result) => {
            if (!err) {
              // console.log(`Messages sent seccessfully for block ${evt.endBlock.height}`);
              console.log(`Messages sent successfully`);
              console.log(result);
              console.log(`Total Error count since startup: ${this.kafkaErrCount}`);
              console.log(this.kafkaErrs);
            } else {
              console.log(err);
              this.kafkaErrs.push(err);
              this.kafkaErrCount += 1;
              console.log(this.kafkaErrs);
            }
          });

        }
      }
  
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

  }

  recieve = (msg) => {

    this.msgCount += 1;

    // Decode message and convert to object with longs as strings
    const event = this.BusEvent.toObject(this.BusEvent.decode(msg), { longs: String });
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
    const addr = 'tcp://0.0.0.0:3005';
    pair.bind(addr);
    pair.on('data', this.recieve);

  }

}

module.exports = {
  Broker
}