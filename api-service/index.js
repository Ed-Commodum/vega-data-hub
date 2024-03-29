const { Pool } = require('pg');
const express = require('express');
const { swaggerDocs } = require('./swagger.js');
const { routes } = require('./routes.js');

const { StreamingAPIServer } = require('./websocket-api/streamingApiServer.js');

const pgPool = new Pool({
    host: process.env.TIMESCALEDB_HOST,
    port: process.env.TIMESCALEDB_PORT,
    database: 'postgres',
    user: 'postgres',
    password: 'ilovetimescaledb'
});

const app = express();
const PORT = 8080;

app.use(express.json());
app.set('json spaces', 2);


const expressServer = app.listen(PORT, async () => {
    console.log(`App is running at http://localhost:${PORT}`);

    routes(app, pgPool);

    swaggerDocs(app, PORT);
});

new StreamingAPIServer(expressServer);

// const { main } = require('./websocket-api/index.js');
// main();