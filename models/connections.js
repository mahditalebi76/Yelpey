'use strict';
module.exports = (sequelize, DataTypes) => {
  const connections = sequelize.define('connections', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    followerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    followeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    indexes: [{
      unique: true,
      fields: ['followerId', 'followeeId']
    }]
  });
  connections.associate = function (models) {
    // associations can be defined here

  };
  return connections;
};