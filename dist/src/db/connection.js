"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
const knexConfig = require("../../knexfile");
let connectionInstance = undefined;
exports.default = (function () {
    if (connectionInstance) {
        return connectionInstance;
    }
    connectionInstance = knex(knexConfig);
    return connectionInstance;
})();
//# sourceMappingURL=connection.js.map