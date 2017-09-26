"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const app = express();
app.use(bodyParser.json());
app.use('/api', require('./routes/currency'));
const server = http.createServer(app);
server.on('listening', () => {
    const address = server.address();
    console.log(address);
    console.log(`🌎 Server Running -> ${address.address} ${address.port}`);
});
server.listen(3000);
//# sourceMappingURL=server.js.map