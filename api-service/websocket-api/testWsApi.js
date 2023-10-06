const { WebSocket } = require('ws');

// const msg = { payloads: [ { type: 'volume', mode: 'total' } ] };
// const msg = { payloads: [ { type: 'volume', mode: 'rolling', marketId: '5b05109662e7434fea498c4a1c91d3179b80e9b8950d6106cec60e1f342fc604', interval: 'INTERVAL_ROLLING_5M' } ] };
// const msg = { payloads: [ { type: 'volume', mode: 'rolling', interval: 'INTERVAL_ROLLING_5M' } ] };
// const msg = { payloads: [ { type: 'volume', mode: 'historical', marketId: '2dca7baa5f7269b08d053668bca03f97f72e9a162327eebd941c54f1f9fb8f80', partyId: 'b76964523e15d735bfda7289cab1ad4c0daaf5bf8f845395116a554dbd87eb4b', interval: 'INTERVAL_5M' } ] };
// const msg = { payloads: [ { type: 'volume', mode: 'historical', marketId: '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5', partyId: '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679', interval: 'INTERVAL_5M' } ] };
// const msg = { payloads: [ { type: 'volume', mode: 'historical', marketId: '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5', interval: 'INTERVAL_5M' } ] };
const msg = { payloads: [ { type: 'volume', mode: 'historical', partyId: '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679', interval: 'INTERVAL_5M' } ] };

const ws = new WebSocket(`${process.env.API_URL}/ws`);

ws.on('error', (err) => console.error(err));

ws.on('open', () => ws.send(JSON.stringify(msg)));

ws.on('message', (msg) => console.log(msg.toString()));