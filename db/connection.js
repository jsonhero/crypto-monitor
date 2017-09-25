const mysql = require('mysql');

let connectionInstance = null;

module.exports = () => {
    if (connectionInstance) {
        return connectionInstance;
    }
    connectionInstance = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });

    return connectionInstance;
};