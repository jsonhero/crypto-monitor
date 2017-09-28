import { Exchange, ExchangeCurrency } from "./model";
import * as currencies from "../currencies";

class BitfinexExchange extends Exchange {

  getTickerURL(currency_id: string): string {
    return "";
  }

  normalizeTickerResult(data: any) {
    return {

    };
  }
}

const Bitfinex = new BitfinexExchange("Bitfinex", "https://api.bitfinex.com");

Bitfinex.addCurrency(currencies.BTC_USD, "tBTCUSD");
Bitfinex.addCurrency(currencies.ETH_USD, "tETHUSD");


export default Bitfinex;