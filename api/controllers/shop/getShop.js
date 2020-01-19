const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Category = db.categories;
const Address = db.addresses;
const sequelize = require('../../../database-connection')
module.exports.getShop = (req, res) => {
    Shop.findOne({
            where: {
                id: req.body.id
            },
            attributes: {
                include: [
                    [sequelize.literal('Case when "rateCount"=0 then 0 Else CAST("rateSum" AS float) / CAST("rateCount" AS float) End'), 'rate']
                ]
            },
            include: ['category', 'address', 'thumbnail']
        }).then(shop => {
            return res.status(200).json({
                shop
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                err: 'server error: finding shop'
            })
        })
}