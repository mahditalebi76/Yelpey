const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Category = db.categories;
const Address = db.addresses;
const sequelize = require('../../../database-connection')
const _ = require('lodash')
module.exports.getShopByCategory = (req, res) => {
    Shop.findAll({
            where: {
                categoryId: req.body.categoryId
            },
            attributes: {
                include: [
                    [sequelize.literal('Case when "rateCount"=0 then 0 Else CAST("rateSum" AS float) / CAST("rateCount" AS float) End'), 'rate']
                ]
            },
            include: ['category', 'address', 'thumbnail']
        }).then(shops => {
            sorted = _.orderBy(
                shops,
                function (shop) {
                    return shop.rate;
                },
                ['desc']
            );
            return res.status(200).json({
                sorted
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                err: 'server error: finding shops'
            })
        })



}