const db = require('../../../models/index');
const User = db.users;
const Connection = db.connections;

module.exports.follow = (req, res) => {
    followingHimself = req.body.id == req.user.id

    if (followingHimself) {
        return res.status(200).json({
            mess: 'you cannot follow yourself :)'
        })
    } else {
        Connection.findOne({
            where: {
                followerId: req.user.id,
                followeeId: req.body.id
            }
        }).then(following => {
            if (following) {
                return res.status(200).json({
                    mess: 'you are already following this user'
                })
            } else {
                Connection.create({
                        followerId: req.user.id,
                        followeeId: req.body.id
                    }).then(followed => {
                        return res.status(200).json(followed)
                    })
                    .catch(err => {
                        console.log(err)
                        return res.status(500).json({
                            error: 'couldnt follow user'
                        })
                    })
            }
        })
    }
}

module.exports.followers = (req, res) => {
    Connection.findAll({
            where: {
                followeeId: req.body.id
            },
            include: [{
                model: User,
                as: 'follower',
                attributes: ['id', 'firstName', 'lastName']

            }]
        })
        .then(followers => {
            return res.status(200).json({
                followers
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                err: 'cant find followers'
            })
        })
}

module.exports.following = (req, res) => {
    Connection.findAll({
            where: {
                followerId: req.body.id
            },
            include: [{
                model: User,
                as: 'followee',
                attributes: ['id', 'firstName', 'lastName']
            }]
        })
        .then(following => {
            return res.status(200).json({
                following
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                err: 'cant find following'
            })
        })
}