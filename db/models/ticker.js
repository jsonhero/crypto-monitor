const connection = require('../connection');
const { sanitizeQuery } = require('../utils');

class Ticker {
    constructor(dbRow) {
        this.fields = () => {
            return {
                symbol: dbRow.symbol,
                price: dbRow.price,
                volume: dbRow.volume,
                low: dbRow.low,
                high: dbRow.high,
            }
        }
    }

    create(tickerInput) {
        return new Promise((resolve, reject) => {
            const conn = connection();
            const { symbol, price, volume, low, high } = tickerInput;
            const query = `INSERT INTO ticker(symbol, price, volume, low, high) VALUES (,${symbol}, ${price}, ${volume}, ${low}, ${high})`
            conn.query(query, (err, results) => {
                if (err) return reject(err);
                console.log(results, 'results!');
            })
        })
    }

    static read() {
        return new Promise((resolve, reject) => {
            const conn = connection();
            const query = `SELECT * FROM ticker`;
            conn.query(query, (err, results) => {
                if (err) return reject(err);
                resolve(results.map((row) => new Ticker(row).fields()))
            })
        })
    }
}

module.exports = Ticker;