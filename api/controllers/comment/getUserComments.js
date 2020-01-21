const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Comment = db.comments;
const sequelize = require('../../../database-connection');

module.exports.getUserComments = (req, res) => {
    Comment.findAll({
            where: {
                userId: req.body.id
            },
            include: [{
                model: Shop,
                as: 'shop',
                attributes: {
                    include: [
                        [sequelize.literal('Case when "rateCount"=0 then 0 Else CAST("rateSum" AS float) / CAST("rateCount" AS float) End'), 'rate']
                    ]
                },
                include: ['category', 'address', 'thumbnail']
            }]
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