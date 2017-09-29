import db from "../connection";
import { DBModel } from "../../types/model-types";
import { MARKET_TABLE } from "./Market";
import { CURRENCY_TABLE } from "./currency";

export const MARKET_TICKER_TABLE = "Market_ticker";

interface MarketTickerFields {
  // 'Market_ticker' table fields
  id: string;
  symbol: string;
  price: number;
  volume: number;
  high: number;
  low: number;
}


interface MarketTickerArgs {
  Market: string;
  currency: string;
  symbol: string;
}

export class MarketTickerInput {
    quote_currency: string;
    price: number;
    volume: number;
    high: number;
    low: number;
    constructor() {
        this.quote_currency = undefined;
        this.price = undefined;
        this.volume = undefined;
        this.high = undefined;
        this.low = undefined;
    }
    setQuoteCurrency(quote_currency: string) {
        this.quote_currency = quote_currency;
    }
    setPrice(price: number) {
        this.price = price;
    }
    setVolume(volume: number) {
        this.volume = volume;
    }
    setHigh(high: number) {
        this.high = high;
    }
    setLow(low: number) {
        this.low = low;
    }
}

// export interface MarketTickerInput {
//   symbol: string;
//   price: number;
//   volume: number;
//   high: number;
//   low: number;
//   // foreign key relations
//   currency_id: number;
//   Market_id: number;
// }

class MarketTicker implements DBModel {
    fields: any;
    constructor(row: any) {
        this.fields = (): MarketTickerFields => ({
            // native fields
            id: row.id,
            symbol: row.symbol,
            price: row.price,
            volume: row.price,
            high: row.high,
            low: row.low,
        });
    }

    public static async create(input: MarketTickerInput): Promise<any> {
        const result = await db(MARKET_TICKER_TABLE).insert({
            quote_currency: input.quote_currency,
            price: input.price,
            volume: input.volume,
            high: input.high,
            low: input.low,
        });
        return result;
    }

    public static async read(args?: MarketTickerArgs): Promise<Array<MarketTicker>> {
        const results = await db.select(`${MARKET_TICKER_TABLE}.*`, `${MARKET_TABLE}.name AS Market`, `${CURRENCY_TABLE}.currency`)
            .from(MARKET_TICKER_TABLE)
            .leftJoin(MA, `${MARKET_TICKER_TABLE}.Market_id`, `${MARKET_TABLE}.id`)
            .leftJoin(CURRENCY_TABLE, `${MARKET_TICKER_TABLE}.currency_id`, `${CURRENCY_TABLE}.id`);

        return results.map((row: any) => new MarketTicker(row));
    }
}

export default MarketTicker;