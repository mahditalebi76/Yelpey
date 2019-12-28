'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    emailVerified: {
      type: DataTypes.BOOLEAN,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true
    },
    phoneVerified: {
      type: DataTypes.BOOLEAN,
    },
    userType: {
      type: DataTypes.STRING,
      in: ['normal', 'Owner', 'admin']
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    sex: {
      type: DataTypes.STRING,
      in: ['female', 'male', ]
    },
    addressId: {
      //refrences addresses
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: 'addresses', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
    },
    birthday: {
      type: DataTypes.DATE
    },
    //avatar
    avatar: {
      //refrences images
      type: DataTypes.INTEGER,
      references: {
        model: 'images', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
    },
    confirmationCode: {
      type: DataTypes.STRING
    },
    forgotPasswordCode: {
      type: DataTypes.STRING
    },
    nationalCode: {
      type: DataTypes.STRING,
      unique: true
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
    underscored: true
  });
  users.associate = function (models) {
    users.hasOne(models.addresses);
    users.hasOne(models.images);
  };
  return users;
};