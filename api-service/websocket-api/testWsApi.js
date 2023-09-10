const { WebSocket } = require('ws');

const msg = { payloads: [ { type: 'volume', interval: 'INTERVAL_1D' } ] };

const ws = new WebSocket(`${process.env.API_URL}/ws`);

ws.on('error', (err) => console.error(err));

ws.on('open', () => ws.send(JSON.stringify(msg)));

ws.on('message', (msg) => console.log(msg.toString()));