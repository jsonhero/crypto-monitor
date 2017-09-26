import * as knex from "knex";
import knexConfig = require("../../knexfile");

let connectionInstance = undefined;

export default (function() {
    if (connectionInstance) {
        return connectionInstance;
    }
    connectionInstance = knex(knexConfig);

    return connectionInstance;
})();