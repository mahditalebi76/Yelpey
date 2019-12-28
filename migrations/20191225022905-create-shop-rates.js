'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shopRates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shop: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      indexes: [{
        unique: true,
        fields: ['user', 'shop ']
      }]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shopRates');
  }
};