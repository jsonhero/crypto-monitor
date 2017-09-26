"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const app = express();
const currency_1 = require("./routes/currency");
app.use(bodyParser.json());
app.use("/api", currency_1.default);
const server = http.createServer(app);
server.on("listening", () => {
    const address = server.address();
    console.log(address);
    console.log(`🌎 Server Running -> ${address.address} ${address.port}`);
});
server.listen(3000);
//# sourceMappingURL=server.js.map