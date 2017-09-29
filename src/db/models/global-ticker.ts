import db from "../connection";
import { DBModel } from "../../types/model-types";

export const GLOBAL_TICKER_TABLE = "global_ticker";

interface GlobalTickerFields {
    id: string;
    symbol: string;
    price: number;
    volume: number;
    high: number;
    low: number;
}


interface GlobalTickerArgs {
    currency: string;
    symbol: string;
}

interface GlobalTickerInput {
  symbol: string;
  price: number;
  volume: number;
  high: number;
  low: number;
  // foreign key relations
  currency_id: number;
}

class GlobalTicker implements DBModel {
    fields: any;
    constructor(row: any) {
        this.fields = (): GlobalTickerFields => ({
            id: row.id,
            symbol: row.symbol,
            price: row.price,
            volume: row.volume,
            high: row.high,
            low: row.low,
        });
    }

    public static async create(input: GlobalTickerInput): Promise<any> {
        const result = await db(GLOBAL_TICKER_TABLE).insert({
            symbol: input.symbol,
            price: input.price,
            volume: input.volume,
            high: input.high,
            low: input.low,
            currency_id: input.currency_id,
        });
        return result;
    }

    public static async read(args?: GlobalTickerArgs): Promise<Array<GlobalTicker>> {
        const results = await db.select().from(GLOBAL_TICKER_TABLE);

        return results.map((row: any) => new GlobalTicker(row));
    }
}

export default GlobalTicker;