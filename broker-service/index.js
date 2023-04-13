const { Broker } = require('./broker.js');
const broker = new Broker();
setTimeout(broker.start, 36000);

// import nano from 'nanomsg';
// const nano = require('nanomsg');
// const protobuf = require('protobufjs');
// const Long = require('long');
// protobuf.util.Long = Long;
// protobuf.configure();

// const rootPath = __dirname + '/sources/';
// const eventsPath = 'vega/events/v1/events.proto';

// const { BusEvent } = require('./src/gen/vega/events/v1/events_pb.js');
// import { BusEvent } from './src/gen/vega/events/v1/events_pb.js';

// const main = () => {

//     // Load protos
//     const root = new protobuf.Root();
    
//     // Modify resolvePath method to load the protos with our directory structure
//     root.resolvePath = (origin, target) => {
//       console.log(`origin: ${origin}, target: ${target}`);
//       return rootPath + target;
//     };

//     root.loadSync(eventsPath);
//     const BusEvent = root.lookupType('vega.events.v1.BusEvent');
//     const Order = root.lookupType('vega.Order');


//     // Start socket server
//     const pair = nano.socket('pair');
//     const addr = 'tcp://0.0.0.0:3005';
//     pair.bind(addr);
//     pair.on('data', (data) => {

//         // const evt = BusEvent.decode(data);

//         const evt = BusEvent.fromBinary(data);

//         console.log(evt);

//         if (evt.order) {
//             console.log(evt);
//             console.log(typeof evt.order.createdAt);
//             console.log(evt.order.createdAt);
//         }

//     });

// }

// setTimeout(main, 3000)