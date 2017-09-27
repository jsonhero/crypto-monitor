import db from "../connection";
import { DBModel } from "../../types/model-types";

const TABLE_NAME = "exchange_ticker";

interface ExchangeTickerFields {
  // 'exchange_ticker' table fields
  id: string;
  symbol: string;
  price: number;
  volume: number;
  high: number;
  low: number;
  // 'exchange' table JOIN fields
  exchange: string;
  // 'currency' table JOIN fields
  currency: string;
}


interface ExchangeTickerArgs {
  exchange: string;
  currency: string;
  symbol: string;
}

interface ExchangeTickerInput {
  symbol: string;
  price: number;
  volume: number;
  high: number;
  low: number;
  // foreign key relations
  currency_id: number;
  exchange_id: number;
}

class ExchangeTicker implements DBModel {
    fields: any;
    constructor(row: any) {
        this.fields = (): ExchangeTickerFields => ({
            // native fields
            id: row.id,
            symbol: row.symbol,
            price: row.price,
            volume: row.price,
            high: row.high,
            low: row.low,
            // from JOINS fields
            currency: row.currency,
            exchange: row.exchange,
        });
    }

    public static async create(input: ExchangeTickerInput): Promise<any> {
        const result = await db(TABLE_NAME).insert({
            symbol: input.symbol,
            price: input.price,
            volume: input.volume,
            high: input.high,
            low: input.low,
        });
        return result;
    }

    public static async read(args: ExchangeTickerArgs): Promise<Array<ExchangeTicker>> {
        const results = await db.select().from(TABLE_NAME);

        return results.map((row: any) => new ExchangeTicker(row));
    }
}

export default ExchangeTicker;