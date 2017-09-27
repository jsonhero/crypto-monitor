const TABLE_NAME = "exchanges";
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex(TABLE_NAME).del()
        .then(function () {
        // Inserts seed entries
        return knex(TABLE_NAME).insert([
            { name: "Coinbase", web_url: "https://www.coinbase.com/" },
            { name: "Poloniex", web_url: "https://poloniex.com/" },
        ]);
    });
};
//# sourceMappingURL=exchange.js.map