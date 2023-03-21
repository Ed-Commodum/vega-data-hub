const nano = require('nanomsg');


const msgCount = 0;

const pair = nano.socket('pair').setEncoding('utf8');
const addr = 'tcp://0.0.0.0:3005';

pair.bind(addr);

pair.on('data', (msg) => {

    msgCount += 1;
    console.log(`${msgCount} messages recieved...`);

    if (msgCount % 10 == 0) {
        console.log(msg);
    };

});