'use strict';
module.exports = (sequelize, DataTypes) => {
  const shopRates = sequelize.define('shopRates', {
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
  shopRates.associate = function (models) {
    shopRates.belongsTo(models.users, {
      foreignKey: 'userId',
      as: 'user'
    })
    shopRates.belongsTo(models.shops, {
      foreignKey: 'shopId',
      as: 'shop'
    })

  };

  shopRates.beforeBulkDestroy((rate) => {
    return sequelize.models.shops.findOne({
      where: {
        id: rate.where.shopId
      }
    }).then(shop => {
      return sequelize.models.shopRates.findOne({
        where: {
          userId: rate.where.userId,
          shopId: shop.id
        }
      }).then(oldRate => {
        return sequelize.models.shops.update({
          rateSum: shop.rateSum - oldRate.stars,
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




  shopRates.beforeCreate((rate) => {
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


  shopRates.beforeBulkUpdate((rate) => {
    return sequelize.models.shops.findOne({
      where: {
        id: rate.attributes.shopId
      }
    }).then(shop => {
      return sequelize.models.shopRates.findOne({
        where: {
          userId: rate.attributes.userId,
          shopId: rate.attributes.shopId
        }
      }).then(oldRate => {
        return sequelize.models.shops.update({
          rateSum: shop.rateSum + rate.attributes.stars - oldRate.stars
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




  return shopRates;
};