// import URL from "url";
import { Exchange } from "./model";
import * as currencies from "../currencies";

class CoinbaseExchange extends Exchange {

  getTickerUrl(currency_id: string): string {
    const url = `${this.getApiUrl()}/products/${currency_id}/ticker`;
    return url.toString();
  }

  normalizeTickerResult(data: any) {
    console.log(data, "d");
    return {

    };
  }
}

const Coinbase = new CoinbaseExchange("Coinbase", "https://api.gdax.com");

Coinbase.addCurrency(currencies.BTC_USD, "BTC-USD");
Coinbase.addCurrency(currencies.ETH_USD, "ETH-USD");


export default Coinbase;