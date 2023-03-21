const nano = require('nanomsg');
const protobuf = require('protobufjs');
const rootPath = __dirname + '/sources/';
const relativeEventsProtoPath = 'vega/events/v1/events.proto';

function startBrokerServer(nano, BusEvent) {

    let msgCount = 0;

    const pair = nano.socket('pair');
    const addr = 'tcp://0.0.0.0:3005';

    pair.bind(addr);

    pair.on('data', (msg) => {

        msgCount += 1;
        console.log(`${msgCount} messages recieved...`);

        const obj = BusEvent.decode(msg);
        console.log(obj);

        // if (msgCount % 100 == 0) {
        //     console.log(msg);
        // };

    });

};

async function main() {


    const root1 = await protobuf.load('/app/events.proto');
    console.log(root1);
    const BusEvent = root1.lookupType(vega.events.v1.BusEvent);


    // Load events proto and BusEvent type
    const root = new protobuf.Root();
    root.resolvePath = (origin, target) => {
        console.log(`origin: ${origin}, target: ${target}`);
        return rootPath + target;
    };
    root.load(relativeEventsProtoPath).then((root) => { console.log(root); return root; }).then((root) => { console.log(root.lookupType(vega.events.v1.BusEvent)) });
    // const root = protobuf.loadSync({ root: rootPath, file: relativeEventsProtoPath });
    console.log(root);
    // const BusEvent = root.lookupType(vega.events.v1.BusEvent);

    // Start broker server
    // startBrokerServer(nano, BusEvent);

}

main();