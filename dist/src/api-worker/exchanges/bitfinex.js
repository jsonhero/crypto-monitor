"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const currencies = require("../currencies");
class BitfinexExchange extends model_1.Exchange {
    getTickerURL(currency_id) {
        return "";
    }
    normalizeTickerResult(data) {
        return {};
    }
}
const Bitfinex = new BitfinexExchange("Bitfinex", "https://api.bitfinex.com");
Bitfinex.addCurrency(currencies.BTC_USD, "tBTCUSD");
Bitfinex.addCurrency(currencies.ETH_USD, "tETHUSD");
exports.default = Bitfinex;
//# sourceMappingURL=bitfinex.js.map