const TABLE_NAME = 'market_ticker';

exports.up = function(knex) {
    return knex.schema.createTable(TABLE_NAME, (table) => {
        table.bigIncrements();

        // foreign links
        table.integer('market_currency_id').unsigned().references('market_currency.id');

        // ticker stats
        table.float('price');
        table.float('ask');
        table.float('bid');
        table.float('24hr_high');
        table.float('24hr_low');
        table.float('24hr_volume');

        table.timestamp('created_at').defaultTo(knex.fn.now());
        // table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable(TABLE_NAME);
};


/*
quote_currency_id
price
volume
high
low
*/