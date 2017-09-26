const knex = require('knex');
const knexConfig = require('../knexfile');

let connectionInstance = null;

module.exports = (function() {
    if (connectionInstance) {
        return connectionInstance;
    }
    connectionInstance = knex(knexConfig);

    return connectionInstance;
})();