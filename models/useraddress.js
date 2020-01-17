'use strict';
module.exports = (sequelize, DataTypes) => {
  const userAddress = sequelize.define('userAddress', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      //refrences users
      type: DataTypes.INTEGER,
      references: {
        model: 'users', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      allowNull: false,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'addresses',
        key: 'id'
      },
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
  userAddress.associate = function (models) {
    // associations can be defined here
    userAddress.belongsTo(models.users, {
      foreignKey: 'userId',
      targetKey: 'id',
      as: 'user'
    });

    userAddress.belongsTo(models.addresses, {
      foreignKey: 'addressId',
      targetKey: 'id',
      as: 'address'
    });
  };
  return userAddress;
};