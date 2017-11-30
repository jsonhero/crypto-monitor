const TABLE_NAME = "market_currency";


exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex(TABLE_NAME).del()
        .then(function() {
            // Inserts seed entries
            return knex(TABLE_NAME).insert([
                //BTC for ETH
                { base_currency_id: 1, quote_currency_id: 2, market_id: 1, api_currency_translation: "BTC-ETH" },
                //ETH for LTC
                { base_currency_id: 2, quote_currency_id: 3, market_id: 2, api_currency_translation: "ETH-LTC" },
                //BTC for LTC
                { base_currency_id: 1, quote_currency_id: 3, market_id: 1, api_currency_translation: "BTC-LTC" },
            ]);
        });
};