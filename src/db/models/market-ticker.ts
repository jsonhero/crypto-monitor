import { Table, Column, Model, DataType, HasMany, AutoIncrement, PrimaryKey, ForeignKey } from "sequelize-typescript";
import { MarketCurrency } from "./market-currency";

@Table({
  tableName: "market_ticker",
})
export class MarketTicker extends Model<MarketTicker> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => MarketCurrency)
  @Column(DataType.INTEGER)
  market_currency_id: number;

  @Column(DataType.FLOAT)
  price: string;

  @Column(DataType.FLOAT)
  bid: string;

  @Column(DataType.FLOAT)
  ask: string;

  @Column(DataType.DATE)
  created_at: string;

  @Column(DataType.DATE)
  updated_at: string;

}

export default MarketTicker;