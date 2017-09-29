const TABLE_NAME = "market_ticker";


exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex(TABLE_NAME).del()
        .then(function() {
            const insert = [];
            for (j = 1; j < 4; j++) {
                for (i = 500; i < 10000; i++) {
                    insert.push({
                        market_currency_id: j,
                        price: i,
                        bid: (i - 1),
                        ask: (i - 3),
                        created_at: new Date(Date.now() + (i * 100000)).toISOString().slice(0, 19).replace('T', ' '),
                    })
                }
            }
            // Inserts seed entries
            return knex(TABLE_NAME).insert(insert);
        });
};