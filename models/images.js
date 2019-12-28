'use strict';
module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define('images', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uploader: {
      //refrences users
      type: DataTypes.INTEGER,
      references: {
        model: 'users', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
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
  images.associate = function (models) {
    images.hasOne(models.users)
  };
  return images;
};