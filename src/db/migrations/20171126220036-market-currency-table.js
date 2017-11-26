const TABLE_NAME = 'market_currency';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable(TABLE_NAME, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            market_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'market',
                    key: 'id',
                },
            },
            base_currency_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'currency',
                    key: 'id',
                },
            },
            quote_currency_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'currency',
                    key: 'id',
                },
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