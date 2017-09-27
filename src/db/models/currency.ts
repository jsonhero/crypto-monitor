import db from "../connection";
import { DBModel } from "../../types/model-types";

export const CURRENCY_TABLE = "currencies";

interface CurrencyFields {
    id: string;
    currency: string;
    display_name: string;
}


interface CurrencyArgs {
    name: string;
}

interface CurrencyInput {
    currency: string;
    display_name: string;
}

class Currency implements DBModel {
    fields: any;
    constructor(row: any) {
        this.fields = (): CurrencyFields => ({
            id: row.id,
            currency: row.currency,
            display_name: row.display_name,
        });
    }

    public static async create(input: CurrencyInput): Promise<any> {
        const result = await db(CURRENCY_TABLE).insert({
            currency: input.currency,
            display_name: input.display_name,
        });
        return result;
    }

    public static async read(args?: CurrencyArgs): Promise<Array<Currency>> {
        const results = await db.select().from(CURRENCY_TABLE);

        return results.map((row: any) => new Currency(row));
    }
}

export default Currency;