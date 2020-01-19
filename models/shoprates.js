'use strict';
module.exports = (sequelize, DataTypes) => {
  const shoprates = sequelize.define('shoprates', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    shopId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shops',
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
  }, {
    indexes: [{
      unique: true,
      fields: ['userId', 'shopId']
    }]
  });
  shoprates.associate = function (models) {
    shoprates.belongsTo(models.users, {
      foreignKey: 'userId',
      as: 'user'
    })
    shoprates.belongsTo(models.shops, {
      foreignKey: 'shopId',
      as: 'shop'
    })

  };

  shoprates.beforeBulkDestroy((rate) => {
    return sequelize.models.shops.findOne({
      where: {
        id: rate.where.shopId
      }
    }).then(shop => {
      return sequelize.models.shoprates.findOne({
        where: {
          userId: rate.where.userId,
          shopId: shop.id
        }
      }).then(oldrate => {
        return sequelize.models.shops.update({
          rateSum: shop.rateSum - oldrate.stars,
          rateCount: (shop.rateCount - 1)
        }, {
          where: {
            id: shop.id
          }
        }).then(done => {
          console.log("done3")
        })
      })
    })
  })




  shoprates.beforeCreate((rate) => {
    return sequelize.models.shops.findOne({
      where: {
        id: rate.shopId
      }
    }).then(shop => {
      sequelize.models.shops.update({
        rateSum: shop.rateSum + rate.stars,
        rateCount: (shop.rateCount + 1)
      }, {
        where: {
          id: shop.id
        }
      }).then(done => {
        console.log("done1")
      })

    })
  })


  shoprates.beforeBulkUpdate((rate) => {
    return sequelize.models.shops.findOne({
      where: {
        id: rate.attributes.shopId
      }
    }).then(shop => {
      return sequelize.models.shoprates.findOne({
        where: {
          userId: rate.attributes.userId,
          shopId: rate.attributes.shopId
        }
      }).then(oldrate => {
        return sequelize.models.shops.update({
          rateSum: shop.rateSum + rate.attributes.stars - oldrate.stars
        }, {
          where: {
            id: shop.id
          }
        }).then(done => {
          console.log("done2")
        })
      })
    })
  })




  return shoprates;
};