import * as express from "express";
import * as bodyParser from "body-parser";
import * as http from "http";
import * as epilogue from "epilogue";
import dbConnection from "./db/dbConnection";

async function runServer() {
  const sequelize = await dbConnection();
  const { Market, Currency, MarketCurrency } = sequelize.models;

  const app = express();

  app.use(bodyParser.json());

  app.get("/healthcheck", (req: express.Request, res: express.Response) => {
    res.json({
      health: "good",
    });
  });

  epilogue.initialize({
    app,
    sequelize,
    base: "/api",
  });

  console.log("testerf", sequelize.models.Currency.rawAttributes);

  epilogue.resource({
    model: Market,
    endpoints: ["/market", "/market/:id"],
  });
  epilogue.resource({
    model: Currency,
    endpoints: ["/currency", "/currency/:id"],
  });
  epilogue.resource({
    model: MarketCurrency,
    endpoints: ["/market-currency", "/market-currency/:id"],
  });

  const server = http.createServer(app);

  server.on("listening", () => {
      const address = server.address();
      console.log(address);
      console.log(`🌎 Server Running -> ${address.address} ${address.port}`);
  });

  server.listen(3000);
}

runServer();
