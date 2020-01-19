const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Review = db.reviews;


module.exports.addReview = (req, res) => {

    Review.create({
            userId: req.user.id,
            shopId: req.body.id,
            title: req.body.title,
            content: req.body.content,
            quality: req.body.quality,
            behavior: req.body.behavior,
            speed: req.body.speed,
            price: req.body.price
        }).then(review => {
            return res.status(200).json({
                review
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: 'server error: posting review'
            })
        })
}