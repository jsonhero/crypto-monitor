const TABLE_NAME = 'market_currency';

exports.up = function(knex) {
    return knex.schema.createTable(TABLE_NAME, (table) => {
        table.increments();
        // foreign keys
        table.integer('market_id').unsigned().references('market.id');
        table.integer('base_currency_id').unsigned().references('currency.id');
        table.integer('quote_currency_id').unsigned().references('currency.id');

        table.string('api_currency_translation', 128)

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable(TABLE_NAME);
};