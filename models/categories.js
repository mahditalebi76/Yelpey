'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      //? SHAHAAAAAAAAB default value chi bashe?
      defaultValue: 'something'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imageId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'images',
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
  categories.associate = function (models) {
    // associations can be defined here
    categories.hasMany(models.shops);

  };
  return categories;
};