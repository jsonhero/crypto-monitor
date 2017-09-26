const TABLE_NAME = 'exchange_ticker';
exports.up = function (knex) {
    return knex.schema.createTable(TABLE_NAME, (table) => {
        // foreign links
        table.integer('exchange_id').unsigned().references('exchanges.id');
        table.integer('currency_id').unsigned().references('currencies.id');
        // symbol stats
        table.float('price');
        table.float('volume');
        table.float('high');
        table.float('low');
        table.string('symbol', 32);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable(TABLE_NAME);
};
//# sourceMappingURL=20170925220525_exchange-ticker-table.js.map