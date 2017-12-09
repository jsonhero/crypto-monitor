const TABLE_NAME = 'market';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable(TABLE_NAME, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            market_name: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: null,
                unique: true,
            },
            url: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: null,
            },
            api_path: {
                type: Sequelize.STRING,
                defaultValue: null,
            },
            api_translation: {
                type: Sequelize.TEXT,
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
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(TABLE_NAME);
    }
};