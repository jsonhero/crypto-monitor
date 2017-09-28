/**
 * Exchange unique symbols
 *
 */

 class ExchangeCurrency {
   exchange_name: string;
   exchange_currency_id: string;
   base_currency_id: string;
   constructor(exchange_name: string, base_currency_id: string, exchange_currency_id: string) {
     this.exchange_name = exchange_name;
     this.exchange_currency_id = exchange_currency_id;
     this.base_currency_id = base_currency_id;
   }
 }

 class CoinbaseCurrency extends ExchangeCurrency {
   constructor(base_currency_id: string, exchange_currency_id: string) {
     super("Coinbase", base_currency_id, exchange_currency_id);
   }
 }

new CoinbaseCurrency("BTC-USD", "BTC_USD");

function buildCurrencies(base_currency_id: string) {
  return [
    new CoinbaseCurrency("BTC-USD"),
    new BitfinexCurrency("tBTCUSD"),
  ]
}

 const exchange_currencies = [
   {
     currency_id: "BTC-USD",
     exchanges: [
       new CoinbaseCurrency("BTC-USD"),
       new BitfinexCurrency("tBTCUSD"),
     ]
   },
   {
    currencyId: "ETH-USD",
    exchanges: [
      {
        exchange_name: "Coinbase",
        currency_id: "ETH-USD",
      },
      {
        exchange_name: "Bitfinex",
        currency_id: "tETHUSD"
      }
    ]
  },
 ];


const LTC_EUR = "LTC/";

const CoinbaseIds = [
  ["LTC-EUR", "LTC"],
];

