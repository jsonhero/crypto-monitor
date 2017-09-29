# crypto-monitor

Schema:
![test](https://i.gyazo.com/26bd7b6849cd7ac3414bcfa4a5be3c21.png)

## WIP

Supported Markets

Coinbase

Website:
https://www.coinbase.com/

API:
https://developers.coinbase.com/api/v2

Limits:
10,000/hour = 3 requests a second

Example Request:

https://api.coinbase.com/v2/exchange-rates?currency=BTC

Example Response:

{
  "data": {
    "currency": "BTC",
    "rates": {
      "AED": "36.73",
      "AFN": "589.50",
      "ALL": "1258.82",
    }
  }
}


BitFinex

Website:
https://www.bitfinex.com/

API:
https://docs.bitfinex.com/v2/reference#rest-public-ticker

Limits:
1.5 requests/second

Example Request:

https://api.bitfinex.com/v2/ticker/<Symbol>

Example Response:

{
  "mid":"244.755",
  "bid":"244.75",
  "ask":"244.76",
  "last_price":"244.82",
  "low":"244.2",
  "high":"248.19",
  "volume":"7842.11542563",
  "timestamp":"1444253422.348340958"
}





HitBTC

Website:
https://hitbtc.com

API:
https://hitbtc.com/api#marketrestful

Limits:
1.5 requests/second

Example Request:

https://hitbtc.com/api/1/public/<symbol>/ticker

Example Response:

 {
    "last": "550.73",
    "bid": "549.56",
    "ask": "554.12",
    "high": "600.1",
    "low": "400.7",
    "volume": "567.9",
    "open": "449.73",
    "volume_quote": "289002.81",
    "timestamp": 1393492619000
}

Kraken

Website:
https://www.kraken.com/

API:
https://www.kraken.com/help/api#general-usage

Limits:
See page...

Example Request:

https://api.kraken.com/0/public/Ticker?pair=<symbol>

Example Response:

 {
    "BCHUSD": {
      "a": [
        "416.800000",
        "1",
        "1.000"
      ],
      "b": [
        "414.300000",
        "1",
        "1.000"
      ],
      "c": [
        "416.900000",
        "0.29408156"
      ],
      "v": [
        "758.39191616",
        "4061.39032633"
      ],
      "p": [
        "404.792641",
        "411.886628"
      ],
      "t": [
        307,
        2514
      ],
      "l": [
        "399.900000",
        "399.000000"
      ],
      "h": [
        "418.700000",
        "441.200000"
      ],
      "o": "411.700000"
    }
  }




Poloniex

Website:
https://poloniex.com

API:
https://poloniex.com/support/api/

Limits:
6/per second

Example Request:

https://api.kraken.com/0/public/Ticker?pair=<symbol>

Example Response:

{
"BTC_BCN": {
    "id": 7,
    "last": "0.00000031",
    "lowestAsk": "0.00000031",
    "highestBid": "0.00000030",
    "percentChange": "0.00000000",
    "baseVolume": "34.45515267",
    "quoteVolume": "113385940.67992568",
    "isFrozen": "0",
    "high24hr": "0.00000032",
    "low24hr": "0.00000029"
  },
}


BitStamp

Website:
https://www.bitstamp.net

API:
https://www.bitstamp.net/api/

Limits:
1/per second

Example Request:

https://www.bitstamp.net/api/v2/ticker/<symbol>

Example Response:

 {
  "high": "3761.84",
  "last": "3681.98",
  "timestamp": "1506142645",
  "bid": "3680.99",
  "vwap": "3607.35",
  "volume": "15216.23808359",
  "low": "3514.00",
  "ask": "3685.00",
  "open": "3611.91"
}




YoBit

Website:
https://yobit.net/en/

API:
https://yobit.net/en/api/

Limits:
1/per second

Example Request:

https://yobit.net/api/3/ticker/<symbol>

Example Response:

{
  "ltc_btc": {
    "high": 0.01341651,
    "low": 0.01261226,
    "avg": 0.01301438,
    "vol": 11.16193824,
    "vol_cur": 862.20098206,
    "last": 0.01307185,
    "buy": 0.01297128,
    "sell": 0.01307133,
    "updated": 1506142865
  }
}



BTC38

Website:
http://www.btc38.com

API:
http://www.btc38.com/trade/en_api_manage.html

Limits:
1 every 15 seconds...slow af

Example Request:

http://api.btc38.com/v1/ticker.php?c=<symbol>

Example Response:

Idk


BitFlyer

Website:
https://bitflyer.jp

API:
https://bitflyer.jp/en/api

Limits:
About 1 request a second

Example Request:

https://api.bitflyer.com/v1/ticker?product_code=<symbol>

Example Response:

{
  "product_code": "BTC_USD",
  "timestamp": "2017-09-23T05:11:45.53",
  "tick_id": 169602,
  "best_bid": 3703.05,
  "best_ask": 3724.7,
  "best_bid_size": 0.00166,
  "best_ask_size": 0.01,
  "total_bid_depth": 0.76753,
  "total_ask_depth": 0.1362,
  "ltp": 3705.9,
  "volume": 1.85329138,
  "volume_by_product": 1.85329138
}



BitHumb

Website:
https://www.bithumb.com/

API:
https://www.bithumb.com/u1/US127

Limits:
About 1 request a second

Example Request:

https://api.bithumb.com/public/ticker/<symbol>

Example Response:

{
    "status": "0000",
    "data": {
        "opening_price" : "504000",
        "closing_price" : "505000",
        "min_price" 	: "504000",
        "max_price" 	: "516000",
        "average_price" : "509533.3333",
        "units_traded"  : "14.71960286",
        "volume_1day"   : "14.71960286",
        "volume_7day"   : "15.81960286",
        "buy_price" 	: "505000",
        "sell_price"	: "504000",
        "date"      	: 1417141032622
    }
}






CoinOne

Website:
https://coinone.co.kr/

API:
http://doc.coinone.co.kr/

Limits:
1.5 request/per second

Example Request:

https://api.coinone.co.kr/ticker/?currency=<symbol>
Example Response:

{
    "result": "success",
    "volume": "1802.5133",
    "last": "4208000",
    "yesterday_last": "4110000",
    "timestamp": "1506143983",
    "yesterday_low": "4058000",
    "high": "4256500",
    "currency": "btc",
    "low": "4055000",
    "errorCode": "0",
    "yesterday_first": "4285500",
    "yesterday_volume": "2793.1224",
    "yesterday_high": "4323000",
    "first": "4233000"
}







TICKER DB SCHEMA:

{
  Data: {
	Timestamp: String,
	Symbol: String,
	Price: Number,
	Volume: Number,
	Low: Number,
	High: Number,
  }
}














API Endpoints


Supported Exchanges:

Route:
/api/v1/exchanges

Search Params:
name - name of the exchange

Fields:
exchangeName (String) - name of exchange
link (String) - Url to exchange


Supported Currencies:

Route:
/api/v1/currencies 

Search Params:
name - general name for currency

Fields:
currencyName (String) - name of currency

Exchange Tickers:

Route:
/api/v1/exchange-ticker

Search Params:
exchangeName - name of the exchange
currencyName - name of currency
symbol - symbol for sub-currency


Fields:
symbol (String) - symbol for sub-currency
price (Float) - last successful buy amount
volume (Float) - last 24 hour volume
low (Float) - last 24 hour low
high (Float) - last 24 hour high
lastUpdated (String/Date) - the last time the price was updated
exchangeName (String) - Name of the exchange


Main Ticker:

Route:
/api/v1/ticker

Search Params:
currencyName - name of currency
symbol - symbol for sub-currency


Fields:
symbol (String) - symbol for sub-currency
price (Float) - last successful buy amount
volume (Float) - last 24 hour volume
low (Float) - last 24 hour low
high (Float) - last 24 hour high
lastUpdated (String/Date) - the last time the price was updated


Global Data:

Route:
/api/v1/global



Search Params:


Fields:
total_exchanges (Number) - count of exchanges provided
total_currencies (Number) - count of currencies 





