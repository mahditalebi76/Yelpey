const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const ShopRate = db.shopRates;
const sequelize = require('../../../database-connection')

const {
    updateOrCreate
} = require('../../middlewares/updateOrCreate');


module.exports.getAllUserRates = (req, res) => {

    ShopRate.findAll({
            where: {
                userId: req.user.id
            },
            attributes: ['userId', 'shopId', 'stars', 'updatedAt'],
            include: [{
                    model: Shop,
                    as: 'shop',
                    attributes: {
                        include: [
                            [sequelize.literal('Case when "rateCount"=0 then 0 Else CAST("rateSum" AS float) / CAST("rateCount" AS float) End'), 'RATE']
                        ]
                    },
                    include: ['category', 'address', 'thumbnail']

                }

            ]
        }).then(rates => {
            return res.status(200).json(rates)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                err: 'server error: finding user rates'
            })
        })

}