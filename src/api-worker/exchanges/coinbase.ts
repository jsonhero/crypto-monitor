import { Exchange, ExchangeCurrency } from "./model";
import * as currencies from "../currencies";

class CoinbaseExchange extends Exchange {

  getTickerURL(currency_id: string): string {
    return "";
  }

  normalizeTickerResult(data: any) {
    return {

    };
  }
}

const Coinbase = new CoinbaseExchange("Coinbase", "https://api.gdax.com");

Coinbase.addCurrency(currencies.BTC_USD, "BTC-USD");
Coinbase.addCurrency(currencies.ETH_USD, "ETH-USD");


export default Coinbase;