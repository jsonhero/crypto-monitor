const TABLE_NAME = 'exchanges';

exports.up = function(knex) {
    return knex.schema.createTable(TABLE_NAME, (table) => {
        table.increments();
        table.string('exchange_name', 128);
        table.string('web_url');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable(TABLE_NAME);
};