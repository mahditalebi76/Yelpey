'use strict';
module.exports = (sequelize, DataTypes) => {
  const testGIS = sequelize.define('testGIS', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    geo: {
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
  }, {});
  testGIS.associate = function (models) {
    // associations can be defined here
  };
  return testGIS;
};