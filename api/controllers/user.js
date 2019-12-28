const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const randomstring = require('randomstring');
const db = require('../../models');
const User = db.users;
// const mailController = require('../mailController');


module.exports.createUser = async (userInfo) => {
    return await User.create(
        userInfo
    );
};


// ============================================================
module.exports.updateUserReq = async (req, res) => {
    return this.updateUser({
            userId: req.body.userId
        }, req.body)
        .then(res => {
            if (res == 1) {
                return res.status(200).json({
                    mess: "updated"
                })
            } else return res.status(500).json({
                mess: "err"
            })
        })
        .catch(err => {
            return res.status(500).json({
                err
            })
        })
}

exports.updateUser = (userId, obj) => {
    return User.update(
        obj, {
            where: {
                userId
            }
        }
    )
}

// ============================================================
module.exports.findAllUsers = async (req, res) => {
    // console.log(User.findAll({
    //     where: {}
    // }))
    return this.allUsers()
        .then(users => {
            return res.status(200).json({
                users
            });
        })
        .catch(err => {
            return res.status(500).json({
                err
            });
        });
};

exports.allUsers = async () => {
    return await User.findAll();
};

// ============================================================================
module.exports.findUserReq = async (req, res) => {
    return await this.findUser(req.body)
        .then(user => {
            return res.status(200).json({
                user
            });
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                err
            });
        });
};

module.exports.findUser = async (object) => {
    return await User.findOne({
        where: object
    });
}

// module.exports.findUserByEmail = (req, res) => {
//     return User.findOne({
//             where: {
//                 email: req.body.email
//             }
//         }).then(user => {
//             return user;
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: "email not found"
//             })
//         })
// }