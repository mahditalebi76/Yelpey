const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Comment = db.comments;


module.exports.addComment = (req, res) => {

    Comment.create({
            userId: req.user.id,
            shopId: req.body.id,
            content: req.body.content
        }).then(comment => {
            return res.status(200).json({
                comment
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: 'server error: posting comment'
            })
        })
}