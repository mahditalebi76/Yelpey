'use strict';
module.exports = (sequelize, DataTypes) => {
  const savedAddresses = sequelize.define('savedAddresses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: 'users',
        key: 'id'
      }
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: 'addresses',
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
  }, {});
  savedAddresses.associate = function (models) {
    // associations can be defined here
  };
  return savedAddresses;
};