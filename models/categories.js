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
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
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
    categories.belongsTo(models.images, {
      foreignKey: 'imageId',
      as: 'image'
    })

  };
  return categories;
};