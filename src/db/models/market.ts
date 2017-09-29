import db from "../connection";
import { DBModel } from "../../types/model-types";

export const MARKET_TABLE = "market";

interface MarketFields {
    id: string;
    market_name: string;
    url: string;
}


interface MarketArgs {
    market_name: string;
}

interface MarketInput {
  market_name: string;
  url: string;
}

class Market implements DBModel {
    fields: any;
    constructor(row: any) {
        this.fields = (): MarketFields => ({
            id: row.id,
            market_name: row.market_name,
            url: row.url,
        });
    }

    public static async create(input: MarketInput): Promise<any> {
        const result = await db(MARKET_TABLE).insert({
            market_name: input.market_name,
            url: input.url,
        });
        return result;
    }

    public static async read(args?: MarketArgs): Promise<Array<Market>> {
        const results = await db.select().from(MARKET_TABLE);

        return results.map((row: any) => new Market(row));
    }
}

export default Market;