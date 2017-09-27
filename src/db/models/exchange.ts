import db from "../connection";
import { DBModel } from "../../types/model-types";

const TABLE_NAME = "exchanges";

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

    public static async create(input: any): Promise<any> {
        const result = await db(TABLE_NAME).insert({
            currency: input.currency,
            display_name: input.display_name,
        });
        return result;
    }

    public static async read(args: ExchangeArgs): Promise<Array<Exchange>> {
        const results = await db.select().from(TABLE_NAME);

        return results.map((row: any) => new Exchange(row));
    }
}

export default Exchange;