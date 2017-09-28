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
// import URL from "url";
const axios_1 = require("axios");
class ExchangeCurrency {
    constructor(exchange_name, base_currency_id, exchange_currency_id) {
        this.exchange_name = exchange_name;
        this.exchange_currency_id = exchange_currency_id;
        this.base_currency_id = base_currency_id;
    }
    getExchangeCurrency() {
        return this.exchange_currency_id;
    }
    getBaseCurrency() {
        return this.base_currency_id;
    }
}
exports.ExchangeCurrency = ExchangeCurrency;
class Exchange {
    constructor(exchange_name, api_url) {
        this.exchange_name = exchange_name;
        this.api_url = api_url;
        this.currencies = [];
    }
    getApiUrl() {
        return this.api_url;
    }
    getTickerUrl(currency_id) {
        const url = `${this.getApiUrl()}/ticker/${currency_id}`;
        return url.toString();
    }
    retrieveTicker(currency_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tickerResponse = yield this.fetchData(this.getTickerUrl(currency_id));
            return this.normalizeTickerResult(tickerResponse.data);
        });
    }
    normalizeTickerResult(data) {
        return data;
    }
    fetchData(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield axios_1.default.get(url);
            return result;
        });
    }
    addCurrency(base_currency_id, exchange_currency_id) {
        this.currencies.push(new ExchangeCurrency(this.exchange_name, base_currency_id, exchange_currency_id));
    }
    getCurrencies() {
        return this.currencies;
    }
}
exports.Exchange = Exchange;
//# sourceMappingURL=model.js.map