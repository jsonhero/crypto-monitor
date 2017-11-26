import { Table, Column, Model, DataType, HasMany, PrimaryKey } from "sequelize-typescript";

@Table({
  tableName: "market",
})
export class Market extends Model<Market> {

  @Column(DataType.STRING)
  market_name: string;

  @Column(DataType.STRING)
  url: string;

  @Column(DataType.DATE)
  created_at: string;

  @Column(DataType.DATE)
  updated_at: string;

}

export default Market;