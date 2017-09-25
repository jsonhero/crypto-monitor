const makeConnection = require('../connection');

const CREATE_TABLE = `
CREATE TABLE ticker (ticker_id INT AUTO_INCREMENT PRIMARY KEY, timestamp TIMESTAMP, symbol VARCHAR(8), price FLOAT, volume FLOAT, low FLOAT, high FLOAT)
`;

const connection = makeConnection();


connection.query(CREATE_TABLE, (err, results, fields) => {
    if (err) throw err;
    console.log(results);
});