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
const exchanges_1 = require("./exchanges");
const exchangePollTimeout = 5000;
function runWorker(exchanges) {
    return __awaiter(this, void 0, void 0, function* () {
        exchanges.forEach((exchange) => {
            const currencies = exchange.getCurrencies();
            currencies.forEach((currency) => {
                const tickerRequester = (_currency, _exchange) => __awaiter(this, void 0, void 0, function* () {
                    yield _exchange.retrieveTicker(_currency.getExchangeCurrency());
                    setTimeout(() => tickerRequester(_currency, _exchange), exchangePollTimeout);
                });
                tickerRequester(currency, exchange);
            });
        });
    });
}
runWorker(exchanges_1.default);
//# sourceMappingURL=index.js.map