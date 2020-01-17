'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      phoneVerified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      thumbnail: {
        type: Sequelize.INTEGER,
        allowNull: true,
        //TODO add default thumbnail for shops
        // defaultValue:1
      },
      isOpen: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      rateSum: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      rateCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shops');
  }
};