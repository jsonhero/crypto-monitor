// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    },
    // pool: {
    //   min: 0,
    //   max: 8,
    // }
    migrations: {
        directory: './db/migrations',
        tableName: 'knex_migrations',
    },
    seeds: {
        directory: './db/seeds',
    },
};