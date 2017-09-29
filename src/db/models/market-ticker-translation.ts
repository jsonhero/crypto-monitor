import db from "../connection";
import { DBModel } from "../../types/model-types";

export const CURRENCY_TABLE = "market_ticker_translation";

interface TickerTranslationFields {
    id: number;
    api_type: number;
    api_http: any;
    api_websocket: any;
    data_translation: any;
}


interface TickerTranslationInput {
    market_id: number;
    api_type: number;
    api_http: any;
    api_websocket: any;
    data_translation: any;
}

class TickerTranslation implements DBModel {
    fields: any;
    raw: any;
    constructor(row: any) {
        this.fields = (): TickerTranslationFields => ({
            id: row.id,
            api_type: row.api_type,
            api_http: row.api_http,
            api_websocket: row.api_websocket,
            data_translation: row.data_translation,
        });

        this.raw = () => row;
    }

    public static async create(input: TickerTranslationInput): Promise<any> {
        const result = await db(CURRENCY_TABLE).insert({
            market_id: input.market_id,
            api_type: input.api_type,
            api_http: input.api_http,
            api_websocket: input.api_websocket,
            data_translation: input.data_translation,
        });
        return result;
    }

    public static async read(): Promise<Array<TickerTranslation>> {
        const results = await db.select().from(CURRENCY_TABLE);

        return results.map((row: any) => new TickerTranslation(row));
    }
}

export default TickerTranslation;