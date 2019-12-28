'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('connections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      follower: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      followee: {
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
        fields: ['follower', 'followee']
      }]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('connections');
  }
};