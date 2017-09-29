import db from "../connection";
import { DBModel } from "../../types/model-types";

export const CURRENCY_TABLE = "market_currency";

interface MarketCurrencyFields {
    id: number;
    market_name: string;
    quote_currency: string;
    base_currency: string;
}


interface MarketCurrencyArgs {
    name: string;
}

interface MarketCurrencyInput {
    market_id: number;
    base_currency_id: number;
    quote_currency_id: number;
    api_currency_translation: string;
}

class MarketCurrency implements DBModel {
    fields: any;
    raw: any;
    constructor(row: any) {
        this.fields = (): MarketCurrencyFields => ({
            id: row.id,
            market_name: row.market_name,
            quote_currency: row.quote_currency,
            base_currency: row.base_currency,
        });

        this.raw = () => row;
    }

    public static async create(input: MarketCurrencyInput): Promise<any> {
        const result = await db(CURRENCY_TABLE).insert({
            market_id: input.market_id,
            base_currency_id: input.base_currency_id,
            quote_currency_id: input.quote_currency_id,
            api_currency_translation: input.api_currency_translation,
        });
        return result;
    }

    public static async read(args?: MarketCurrencyArgs): Promise<Array<MarketCurrency>> {
        const results = await db.select().from(CURRENCY_TABLE);

        return results.map((row: any) => new MarketCurrency(row));
    }
}

export default Currency;