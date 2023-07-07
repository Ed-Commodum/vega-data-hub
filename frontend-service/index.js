const express = require('express');

const app = express();
const PORT = 8888;

// app.use(express.json());
app.set('json spaces', 2);

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, async () => {
    console.log(`App is running at http://localhost:${PORT}`);
});