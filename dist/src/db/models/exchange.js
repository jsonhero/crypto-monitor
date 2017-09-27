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
exports.EXCHANGE_TABLE = "exchanges";
class Exchange {
    constructor(row) {
        this.fields = () => ({
            id: row.id,
            name: row.name,
            web_url: row.web_url,
        });
    }
    static create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.default(exports.EXCHANGE_TABLE).insert({
                name: input.name,
                web_url: input.web_url,
            });
            return result;
        });
    }
    static read(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield connection_1.default.select().from(exports.EXCHANGE_TABLE);
            return results.map((row) => new Exchange(row));
        });
    }
}
exports.default = Exchange;
//# sourceMappingURL=exchange.js.map