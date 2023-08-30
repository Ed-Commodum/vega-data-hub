const { WebSocket } = require('ws');

const ws = new WebSocket(`localhost:8081/ws`);

ws.on('open', () => {
    console.log("WebSocket opened");
    const payload = { type: 'volume' };
    ws.send(payload);
});

ws.on('message', (msg) => {
    console.log(msg);
});

ws.on('error', (err) => {
    console.error(err);
})