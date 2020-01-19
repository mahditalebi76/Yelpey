const db = require('../../models/index');
const Shop = db.shops

module.exports.isOwner = (req, res, next) => {
    Shop.findOne({
            where: {
                id: req.body.id
            }
        }).then(shop => {
            if (shop.userId == req.user.id) {
                return next();
            } else {
                return res.status(401).json({
                    message: 'user is not the owner of this shop'
                });
            }
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                err: 'server error: finding shop2'
            })
        })
}