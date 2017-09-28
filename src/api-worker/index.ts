import { Exchange } from "./exchanges/model";
// import exchanges from "./exchanges";

const exchangePollInterval = 5000;

async function runWorker(exchanges: Array<Exchange>) {
  exchanges.forEach((exchange: Exchange) => {
    setInterval(async () => {
      await exchange.retrieveTicker();
    }, exchangePollInterval);
  });
}

