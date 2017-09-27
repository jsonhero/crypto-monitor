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
exports.CURRENCY_TABLE = "currencies";
class Currency {
    constructor(row) {
        this.fields = () => ({
            id: row.id,
            currency: row.currency,
            display_name: row.display_name,
        });
    }
    static create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.default(exports.CURRENCY_TABLE).insert({
                currency: input.currency,
                display_name: input.display_name,
            });
            return result;
        });
    }
    static read(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield connection_1.default.select().from(exports.CURRENCY_TABLE);
            return results.map((row) => new Currency(row));
        });
    }
}
exports.default = Currency;
//# sourceMappingURL=currency.js.map