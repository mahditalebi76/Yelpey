const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Review = db.reviews;
const Image = db.images

module.exports.getShopReviews = (req, res) => {
    Review.findAll({
            where: {
                shopId: req.body.id
            },
            include: [{
                model: User,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName', 'avatarId'],
                include: [{
                    model: Image,
                    as: 'avatar'
                }]
            }, ]
        })
        .then(reviews => {
            return res.status(200).json({
                reviews
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: 'server error: finding reviews'
            })
        })
}