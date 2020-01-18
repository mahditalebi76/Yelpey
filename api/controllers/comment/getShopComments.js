const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Comment = db.comments;
const Image = db.images

module.exports.getShopComments = (req, res) => {
    Comment.findAll({
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
        .then(comments => {
            return res.status(200).json({
                comments
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: 'server error: finding comments'
            })
        })
}