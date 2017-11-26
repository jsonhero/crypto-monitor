const TABLE_NAME = 'currency';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable(TABLE_NAME, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            currency_name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            display_name: {
                type: Sequelize.STRING,
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

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(TABLE_NAME);
    }
};