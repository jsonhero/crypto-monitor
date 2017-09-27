const TABLE_NAME = "currencies";
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex(TABLE_NAME).del()
        .then(function () {
        // Inserts seed entries
        return knex(TABLE_NAME).insert([
            { currency: "BTC", display_name: "Bitcoin" },
            { currency: "ETH", display_name: "Ethereum" },
        ]);
    });
};
//# sourceMappingURL=currency.js.map