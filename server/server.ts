import * as express from "express";
import * as bodyParser from "body-parser";
import * as http from "http";
// import * as proxy from "http-proxy-middleware";
import * as cors from "cors";

import restifyModels from "./db/restify-models";
import dbConnection from "./db/db-connection";

async function runServer() {
  const sequelize = await dbConnection();

  const app = express();

  app.use(cors());
  app.use(bodyParser.json());

  // app.use("/build", proxy({
  //   target: `http://localhost:3100`,
  //   changeOrigin: true,
  // }));

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

  server.listen(process.env.SERVER_PORT || 3000);
}

runServer();
