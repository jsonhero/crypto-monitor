const db = require('../connection');

const TABLE_NAME = 'currencies';

class Currency {
    constructor(row) {
        this.fields = () => ({
            id: row.id,
            currency: row.currency,
            display_name: row.display_name,
        });
    }

    static async create(input) {
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

module.exports = Currency;