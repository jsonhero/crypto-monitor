import { Exchange } from "./exchanges/model";
import listedExchanges from "./exchanges";

const exchangePollTimeout = 5000;

async function runWorker(exchanges: Array<Exchange>) {
  exchanges.forEach((exchange: Exchange) => {
    const currencies = exchange.getCurrencies();
    currencies.forEach((currency) => {
      const tickerRequester = async (_currency: any, _exchange: any) => {
        await _exchange.retrieveTicker(_currency.getExchangeCurrency());
        setTimeout(() => tickerRequester(_currency, _exchange), exchangePollTimeout);
      };
      tickerRequester(currency, exchange);
    });
  });
}


runWorker(listedExchanges);