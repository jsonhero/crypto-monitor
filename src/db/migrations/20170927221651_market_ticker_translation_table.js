const TABLE_NAME = 'market_ticker_translation';

exports.up = function(knex) {
    return knex.schema.createTable(TABLE_NAME, (table) => {
        table.increments();
        // foreign keys
        table.integer('market_id').unsigned().references('market.id');

        table.integer('api_type');
        table.json("api_websocket");
        table.json("api_http");
        table.json("data_translation");

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable(TABLE_NAME);
};