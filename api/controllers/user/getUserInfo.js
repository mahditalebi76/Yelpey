const db = require('../../../models/index');
const User = db.users;
const Image = db.images;
const Address = db.addresses;
const Connection = db.connections;

module.exports.getUserInfo = (req, res) => {
    Connection.findAndCountAll({
        where: {
            followerId: req.body.id
        }
    }).then(following => {
        Connection.findAndCountAll({
            where: {
                followeeId: req.body.id
            }
        }).then(followers => {
            User.findOne({
                    where: {
                        id: req.body.id
                    },
                    attributes: ['id', 'firstName', 'lastName', 'sex', 'birthday'],
                    include: [{
                            model: Image,
                            as: 'avatar',
                            include: [{
                                model: User,
                                as: 'uploader',
                                attributes: ['id', 'firstName', 'lastName']
                            }]
                        },
                        {
                            model: Address,
                            as: 'address'
                        }
                    ]
                }).then(user => {
                    return res.status(200).json({
                        user,
                        followers: followers.count,
                        following: following.count
                    })
                })
                .catch(err => {
                    console.log(err)
                    return res.status(500).json({
                        error: 'user not found'
                    })
                })
        })
    })



}



module.exports.getSelfInfo = (req, res) => {
    Connection.findAndCountAll({
        where: {
            followerId: req.user.id
        }
    }).then(following => {
        Connection.findAndCountAll({
            where: {
                followerId: req.user.id
            }
        }).then(followers => {
            User.findOne({
                    where: {
                        id: req.user.id
                    },
                    include: [{
                            model: Image,
                            as: 'avatar',
                            include: [{
                                model: User,
                                as: 'uploader',
                                attributes: ['id', 'firstName', 'lastName']
                            }]
                        },
                        {
                            model: Address,
                            as: 'address'
                        }
                    ]
                }).then(user => {
                    return res.status(200).json({
                        user,
                        followers: followers.count,
                        following: following.count

                    })
                })
                .catch(err => {
                    console.log(err)
                    return res.status(500).json({
                        error: 'user not found'
                    })
                })
        })
    })


}