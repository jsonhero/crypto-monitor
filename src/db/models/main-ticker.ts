import db from "../connection";
import { DBModel } from "../../types/model-types";

const TABLE_NAME = "main_ticker";

interface MainTickerFields {
    id: string;
    symbol: string;
    price: number;
    volume: number;
    high: number;
    low: number;
    // 'currency' table JOIN fields
    currency: string;
}


interface MainTickerArgs {
    currency: string;
    symbol: string;
}

interface MainTickerInput {
  symbol: string;
  price: number;
  volume: number;
  high: number;
  low: number;
  // foreign key relations
  currency_id: number;
}

class MainTicker implements DBModel {
    fields: any;
    constructor(row: any) {
        this.fields = (): MainTickerFields => ({
            id: row.id,
            symbol: row.symbol,
            price: row.price,
            volume: row.volume,
            high: row.high,
            low: row.low,
            currency: row.currency,
        });
    }

    public static async create(input: MainTickerInput): Promise<any> {
        const result = await db(TABLE_NAME).insert({
            symbol: input.symbol,
            price: input.price,
            volume: input.volume,
            high: input.high,
            low: input.low,
            currency_id: input.currency_id,
        });
        return result;
    }

    public static async read(args: MainTickerArgs): Promise<Array<MainTicker>> {
        const results = await db.select().from(TABLE_NAME);

        return results.map((row: any) => new MainTicker(row));
    }
}

export default MainTicker;