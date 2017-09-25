const mysql = require('mysql');

function sanitizeQuery(strings, ...keys) {
    return strings.reduce((query, str, i) => {
        const key = keys[i] || '';
        query += `${str}${mysql.escape(key)}`;
        return query;
    }, '');
}

module.exports = { sanitizeQuery };