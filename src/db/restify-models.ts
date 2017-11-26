import * as epilogue from "epilogue";
import { Application } from "express";
import { Sequelize } from "sequelize";


export default async function restifyModels(sequelize: Sequelize, app: Application) {
  const { Market, Currency, MarketCurrency } = sequelize.models;

  epilogue.initialize({
    app,
    sequelize,
    base: "/api",
  });
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
}