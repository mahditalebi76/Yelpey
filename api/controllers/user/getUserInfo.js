const db = require('../../../models/index');
const User = db.users;
const Image = db.images;
const Address = db.addresses;


module.exports.getUserInfo = (req, res) => {
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
            return res.status(200).json(user)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                error: 'user not found'
            })
        })
}



module.exports.getSelfInfo = (req, res) => {
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
            return res.status(200).json(user)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                error: 'user not found'
            })
        })
}