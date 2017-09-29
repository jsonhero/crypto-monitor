const TABLE_NAME = "currency";


exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex(TABLE_NAME).del()
        .then(function() {
            // Inserts seed entries
            return knex(TABLE_NAME).insert([
                { currency_name: "BTC", display_name: "Bitcoin" },
                { currency_name: "ETH", display_name: "Ethereum" },
                { currency_name: "LTC", display_name: "Litecoin" },
            ]);
        });
};