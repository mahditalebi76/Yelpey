'use strict';
module.exports = (sequelize, DataTypes) => {
  const addresses = sequelize.define(
    'addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      addressText: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      cityId: {
        //refrences cities
        type: DataTypes.INTEGER,
        allowNull: false,
        refrences: {
          model: 'cities',
          key: 'id'
        }
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      // location: {
      //? WHAt IS THIS SHAHAB?????
      // }
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }, {}
  );
  addresses.associate = function (models) {
    // associations can be defined here
    addresses.hasMany(models.users);
    addresses.hasMany(models.shops);
    addresses.hasMany(models.savedAddresses)

  };
  return addresses;
};