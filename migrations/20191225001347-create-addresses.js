'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postalCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressText: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cityId: {
        //refrences cities
        type: Sequelize.INTEGER,
        allowNull: false,
        // refrences: {
        //   model: 'cities',
        //   key: id
        // }
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      location: {
        allowNull: false,
        type: Sequelize.GEOGRAPHY('POINT')
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
    return queryInterface.dropTable('addresses');
  }
};