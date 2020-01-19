'use strict';
module.exports = (sequelize, DataTypes) => {
  const shopPosts = sequelize.define('shopPosts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shopId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shops',
        key: 'id'
      }
    },
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'images',
        key: 'id'
      }
    },
    content: {
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
  shopPosts.associate = function (models) {
    shopPosts.belongsTo(models.shops, {
      foreignKey: 'shopId',
      as: 'shop'
    })
    shopPosts.belongsTo(models.images, {
      foreignKey: 'imageId',
      as: 'image'
    })
  };
  return shopPosts;
};