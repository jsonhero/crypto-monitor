import db from "../connection";
import { DBModel } from "../../types/model-types";

export const EXCHANGE_TABLE = "exchanges";

interface ExchangeFields {
    id: string;
    name: string;
    web_url: string;
}


interface ExchangeArgs {
    name: string;
}

interface ExchangeInput {
  name: string;
  web_url: string;
}

class Exchange implements DBModel {
    fields: any;
    constructor(row: any) {
        this.fields = (): ExchangeFields => ({
            id: row.id,
            name: row.name,
            web_url: row.web_url,
        });
    }

    public static async create(input: ExchangeInput): Promise<any> {
        const result = await db(EXCHANGE_TABLE).insert({
            name: input.name,
            web_url: input.web_url,
        });
        return result;
    }

    public static async read(args?: ExchangeArgs): Promise<Array<Exchange>> {
        const results = await db.select().from(EXCHANGE_TABLE);

        return results.map((row: any) => new Exchange(row));
    }
}

export default Exchange;