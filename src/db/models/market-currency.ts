import { Table, Column, Model, DataType, HasMany, PrimaryKey, ForeignKey } from "sequelize-typescript";
import { Currency } from "./currency";
import { Market } from "./market";

@Table({
  tableName: "market_currency",
})
export class MarketCurrency extends Model<MarketCurrency> {

  @ForeignKey(() => Market)
  @Column
  market_id: number;

  @ForeignKey(() => Currency)
  @Column
  base_currency_id: number;

  @ForeignKey(() => Currency)
  @Column
  quote_currency_id: number;

  @Column(DataType.DATE)
  created_at: string;

  @Column(DataType.DATE)
  updated_at: string;

}

export default MarketCurrency;
