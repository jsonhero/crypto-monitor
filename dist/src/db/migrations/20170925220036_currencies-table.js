const TABLE_NAME = 'currencies';
exports.up = function (knex) {
    return knex.schema.createTable(TABLE_NAME, (table) => {
        table.increments();
        table.string('currency').unique();
        table.string('display_name');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable(TABLE_NAME);
};
//# sourceMappingURL=20170925220036_currencies-table.js.map