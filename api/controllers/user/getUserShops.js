const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const sequelize = require('../../../database-connection');



module.exports.getUserShops = (req, res) => {
    Shop.findAll({
            where: {
                userId: req.user.id
            },
            attributes: {
                include: [
                    [sequelize.literal('Case when "rateCount"=0 then 0 Else CAST("rateSum" AS float) / CAST("rateCount" AS float) End'), 'rate']
                ]
            },
            include: ['category', 'address', 'thumbnail']
        }).then(shops => {
            return res.status(200).json({
                shops
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: 'server error:finding shops'
            })
        })
}