import { Table, Column, Model, DataType, HasMany, AutoIncrement, PrimaryKey, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Currency } from "./currency";
import { Market } from "./market";

@Table({
  tableName: "market_currency",
  underscored: true,
})
export class MarketCurrency extends Model<MarketCurrency> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @BelongsTo(() => Market)
  market: Market;

  @ForeignKey(() => Market)
  @Column(DataType.INTEGER)
  market_id: number;


  @BelongsTo(() => Currency, "base_currency_id")
  baseCurrency: Currency;

  @ForeignKey(() => Currency)
  @Column(DataType.INTEGER)
  base_currency_id: number;

  @BelongsTo(() => Currency, "quote_currency_id")
  quoteCurrency: Currency;

  @ForeignKey(() => Currency)
  @Column(DataType.INTEGER)
  quote_currency_id: number;

  @Column(DataType.DATE)
  created_at: string;

  @Column(DataType.DATE)
  updated_at: string;

}

export default MarketCurrency;
