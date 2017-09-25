const bodyParser = require('body-parser');
const http = require('http');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use('/api', require('./routes/ticker'));

const server = http.createServer(app);


server.on('listening', () => {
    const address = server.address();
    console.log(address);
    console.log(`🌎 Server Running -> ${address.address} ${address.port}`);
})

server.listen(3000);