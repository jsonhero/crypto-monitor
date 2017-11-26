import dbConnection from "./dbConnection";

import { Market } from "./models/market";
import { Currency } from "./models/currency";

export default async function initializeModels() {
  const sequelize = await dbConnection();
  console.log(sequelize, "SEQUELIZE");
  sequelize.addModels([Market, Currency]);
}