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
      },
      addressText: {
        type: DataTypes.STRING,
        allowNull: false,
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
      location: {
        allowNull: false,
        type: DataTypes.GEOGRAPHY('POINT')
      },
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
    addresses.belongsTo(models.cities, {
      through: 'CityId'
    })
    addresses.hasMany(models.savedAddresses)

  };
  return addresses;
};