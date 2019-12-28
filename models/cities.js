'use strict';
module.exports = (sequelize, DataTypes) => {
  const cities = sequelize.define('cities', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'states',
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
  cities.associate = function (models) {
    // associations can be defined here
    cities.hasOne(models.states, {
      foreignKey: 'stateId',
      targetKey: 'id'
    })
  };
  return cities;
};