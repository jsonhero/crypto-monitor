import * as express from "express";
import * as bodyParser from "body-parser";
import * as http from "http";

import restifyModels from "./db/restify-models";
import dbConnection from "./db/db-connection";

async function runServer() {
  const sequelize = await dbConnection();

  const app = express();

  app.use(bodyParser.json());

  app.get("/healthcheck", (req: express.Request, res: express.Response) => {
    res.json({
      health: "good",
    });
  });

  await restifyModels(sequelize, app);

  const server = http.createServer(app);

  server.on("listening", () => {
      const address = server.address();
      console.log(address);
      console.log(`🌎 Server Running -> ${address.address} ${address.port}`);
  });

  server.listen(3000);
}

runServer();
