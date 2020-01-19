const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Post = db.shopPosts;
const Image = db.images

module.exports.getShopPosts = (req, res) => {
    Post.findAll({
            where: {
                shopId: req.body.id
            },
            include: [{
                model: Image,
                as: 'image',
            }, ]
        })
        .then(posts => {
            return res.status(200).json({
                posts
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: 'server error: finding posts'
            })
        })
}