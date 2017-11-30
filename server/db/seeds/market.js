const TABLE_NAME = "market";

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex(TABLE_NAME).del()
        .then(function() {
            // Inserts seed entries
            return knex(TABLE_NAME).insert([
                { market_name: "Coinbase", url: "https://www.coinbase.com/" },
                { market_name: "Poloniex", url: "https://poloniex.com/" },
            ]);
        });
};