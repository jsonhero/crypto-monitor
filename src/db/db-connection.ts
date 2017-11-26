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

  // sequelizeInstance = new Sequelize(
  //   process.env.DB_NAME,
  //   process.env.DB_USER,
  //   process.env.DB_PASS, {
  //   host: process.env.DB_HOST,
  //   dialect: "postgres",
  //   pool: {
  //     min: 0,
  //     max: 5,
  //     idle: 10000,
  //   },
  // });

  return sequelizeInstance;
}