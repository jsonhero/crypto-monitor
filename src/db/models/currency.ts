import db from "../connection";

const TABLE_NAME = "currencies";

interface CurrencyFields {
    id: string;
    currency: string;
    display_name: string;
}

class Currency {
    fields: any;
    constructor(row: any) {
        this.fields = (): CurrencyFields => ({
            id: row.id,
            currency: row.currency,
            display_name: row.display_name,
        });
    }

    static async create(input: any) {
        const result = await db(TABLE_NAME).insert({
            currency: input.currency,
            display_name: input.display_name,
        });
        return result;
    }

    static async read() {
        const results = await db.select().from(TABLE_NAME);
        return results;
    }
}

export default Currency;