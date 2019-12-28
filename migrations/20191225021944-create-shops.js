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
      address: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      category: {
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
        allowNull: false,
        //TODO add default thumbnail for shops
        // defaultValue:1
      },
      isOpen: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      location: {
        type: Sequelize.STRING,
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shops');
  }
};