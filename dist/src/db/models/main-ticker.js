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
exports.MAIN_TICKER_TABLE = "main_ticker";
class MainTicker {
    constructor(row) {
        this.fields = () => ({
            id: row.id,
            symbol: row.symbol,
            price: row.price,
            volume: row.volume,
            high: row.high,
            low: row.low,
            currency: row.currency,
        });
    }
    static create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.default(exports.MAIN_TICKER_TABLE).insert({
                symbol: input.symbol,
                price: input.price,
                volume: input.volume,
                high: input.high,
                low: input.low,
                currency_id: input.currency_id,
            });
            return result;
        });
    }
    static read(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield connection_1.default.select().from(exports.MAIN_TICKER_TABLE);
            return results.map((row) => new MainTicker(row));
        });
    }
}
exports.default = MainTicker;
//# sourceMappingURL=main-ticker.js.map