const { Broker } = require('./broker.js');

const broker = new Broker();

setTimeout(broker.start, 32000);