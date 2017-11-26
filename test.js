const WebSocket = require('ws');

/* COINBASE

RESPONSE:
{"type":"received","order_id":"6b9de797-a72f-4ea1-9b28-b8589de7c43a","order_type":"limit","size":"0.93000000","price":"7124.64000000","side":"buy","client_oid":"241f1035-48bc-4068-813a-5f89e2e0f1a5","product_id":"BTC-USD","sequence":4331665477,"time":"2017-11-07T04:24:29.046000Z"}


CODE:
const ws = new WebSocket('wss://ws-feed.gdax.com');

ws.on('open', function open() {
    const msg = {
        type: 'subscribe',
        product_ids: ['BTC-USD'],
    }
    ws.send(JSON.stringify(msg));
});

ws.on('message', function incoming(data) {
    console.log(data);
});

*/


/* Bitfinex

RESPONSE:
[3,[7121.9,79.7392762,7122,74.296639,30.6,0.0043,7121.6,58259.58791164,7440,6911]]

CODE:
const ws = new WebSocket('wss://api.bitfinex.com/ws/2');


ws.on('open', function open() {
    const msg = {
        "event": "subscribe",
        "channel": "ticker",
        "symbol": "tBTCUSD"
    }
    ws.send(JSON.stringify(msg));
});

ws.on('message', function incoming(data) {
    console.log(data);
});

*/


/* HitBTC

RESPONSE:
{"jsonrpc":"2.0","method":"ticker","params":{"ask":"7185.01","bid":"7180.23","last":"7180.79","open":"7211.13","low":"6919.06","high":"7416.64","volume":"8089.31","volumeQuote":"58067325.1728","timestamp":"2017-11-07T05:06:31.138Z","symbol":"BTCUSD"}}
CODE:

const ws = new WebSocket('wss://api.hitbtc.com/api/2/ws');


ws.on('open', function open() {
    const msg = {
        "method": "subscribeTicker",
        "params": {
            "symbol": "BTCUSD"
        },
        "id": 123
    };
    ws.send(JSON.stringify(msg));
});

ws.on('message', function incoming(data) {
    console.log(data);
});

*/


/* Bitstamp

RESPONSE:
{"jsonrpc":"2.0","method":"ticker","params":{"ask":"7185.01","bid":"7180.23","last":"7180.79","open":"7211.13","low":"6919.06","high":"7416.64","volume":"8089.31","volumeQuote":"58067325.1728","timestamp":"2017-11-07T05:06:31.138Z","symbol":"BTCUSD"}}
CODE:
*/
const ws = new WebSocket('wss://api.hitbtc.com/api/2/ws');


ws.on('open', function open() {
    const msg = {
        "method": "subscribeTicker",
        "params": {
            "symbol": "BTCUSD"
        },
        "id": 123
    };
    ws.send(JSON.stringify(msg));
});

ws.on('message', function incoming(data) {
    console.log(data);
});