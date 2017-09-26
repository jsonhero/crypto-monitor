import * as express from "express";
import * as bodyParser from "body-parser";
import * as http from "http";

const app = express();

import currencyAPI from "./routes/currency";

app.use(bodyParser.json());
app.use("/api", currencyAPI);

const server = http.createServer(app);


server.on("listening", () => {
    const address = server.address();
    console.log(address);
    console.log(`🌎 Server Running -> ${address.address} ${address.port}`);
});

server.listen(3000);