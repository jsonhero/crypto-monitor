import { Table, Column, Model, DataType, HasMany, AutoIncrement, PrimaryKey } from "sequelize-typescript";
import { MarketCurrency } from "./market-currency";

@Table({
  tableName: "market",
  underscored: true,
})
export class Market extends Model<Market> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @HasMany(() => MarketCurrency)
  currencies: MarketCurrency[];

  @Column(DataType.STRING)
  market_name: string;

  @Column(DataType.STRING)
  url: string;

  @Column(DataType.STRING)
  api_path: string;

  @Column(DataType.TEXT)
  get api_translation(): object {
    return JSON.parse(this.getDataValue("api_translation"));
  }
  set api_translation(value: object) {
    this.setDataValue("api_translation", JSON.stringify(value));
  }

  @Column(DataType.DATE)
  created_at: string;

  @Column(DataType.DATE)
  updated_at: string;

}

export default Market;