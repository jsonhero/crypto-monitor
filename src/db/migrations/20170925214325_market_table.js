const TABLE_NAME = 'market';

exports.up = function(knex) {
    return knex.schema.createTable(TABLE_NAME, (table) => {
        table.increments();

        table.string('market_name', 255);
        table.string('url', 255);

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable(TABLE_NAME);
};