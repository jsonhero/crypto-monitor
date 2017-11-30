import { Sequelize } from "sequelize-typescript";

let sequelizeInstance: any = undefined;

export default async function dbConnection(): Promise<any> {
  if (sequelizeInstance) {
    return sequelizeInstance;
  }


sequelizeInstance =  new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  modelPaths: [__dirname + "/models"]
});

  return sequelizeInstance;
}