const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const ShopRate = db.shopRates;

const {
    updateOrCreate
} = require('../../middlewares/updateOrCreate');


module.exports.getUserShopRate = (req, res) => {


    ShopRate.findOne({
            where: {
                shopId: req.body.id,
                userId: req.user.id
            },
            attributes: ['stars', 'userId', 'shopId', 'updatedAt']
        }).then(rate => {
            return res.status(200).json({
                rate
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                err: 'server error: finding rate'
            })
        })


}