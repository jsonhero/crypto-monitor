"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import URL from "url";
const model_1 = require("./model");
const currencies = require("../currencies");
class CoinbaseExchange extends model_1.Exchange {
    getTickerUrl(currency_id) {
        const url = `${this.getApiUrl()}/products/${currency_id}/ticker`;
        return url.toString();
    }
    normalizeTickerResult(data) {
        console.log(data, "d");
        return {};
    }
}
const Coinbase = new CoinbaseExchange("Coinbase", "https://api.gdax.com");
Coinbase.addCurrency(currencies.BTC_USD, "BTC-USD");
Coinbase.addCurrency(currencies.ETH_USD, "ETH-USD");
exports.default = Coinbase;
//# sourceMappingURL=coinbase.js.map