"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../connection");
const exchange_1 = require("./exchange");
const currency_1 = require("./currency");
exports.EXCHANGE_TICKER_TABLE = "exchange_ticker";
class ExchangeTicker {
    constructor(row) {
        this.fields = () => ({
            // native fields
            id: row.id,
            symbol: row.symbol,
            price: row.price,
            volume: row.price,
            high: row.high,
            low: row.low,
            // from JOINS fields
            currency: row.currency,
            exchange: row.exchange,
        });
    }
    static create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.default(exports.EXCHANGE_TICKER_TABLE).insert({
                symbol: input.symbol,
                price: input.price,
                volume: input.volume,
                high: input.high,
                low: input.low,
            });
            return result;
        });
    }
    static read(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield connection_1.default.select(`${exports.EXCHANGE_TICKER_TABLE}.*`, `${exchange_1.EXCHANGE_TABLE}.name AS exchange`, `${currency_1.CURRENCY_TABLE}.currency`)
                .from(exports.EXCHANGE_TICKER_TABLE)
                .leftJoin(exchange_1.EXCHANGE_TABLE, `${exports.EXCHANGE_TICKER_TABLE}.exchange_id`, `${exchange_1.EXCHANGE_TABLE}.id`)
                .leftJoin(currency_1.CURRENCY_TABLE, `${exports.EXCHANGE_TICKER_TABLE}.currency_id`, `${currency_1.CURRENCY_TABLE}.id`);
            return results.map((row) => new ExchangeTicker(row));
        });
    }
}
exports.default = ExchangeTicker;
//# sourceMappingURL=exchange-ticker.js.map