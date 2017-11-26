const TABLE_NAME = 'market_ticker';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable(TABLE_NAME, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            market_currency_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'market',
                    key: 'id',
                },
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: true,
                defaultValue: null,
            },
            bid: {
                type: Sequelize.FLOAT,
                allowNull: true,
                defaultValue: null,
            },
            ask: {
                type: Sequelize.FLOAT,
                allowNull: true,
                defaultValue: null,
            },
            created_at: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.fn('NOW'),
                allowNull: false,
            },
            updated_at: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.fn('NOW'),
                allowNull: false,
            },
        });
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable(TABLE_NAME);
    }
};