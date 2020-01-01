const userController = require('../user');
const db = require('../../../models');
const User = db.users;
const bcrypt = require('bcryptjs');

module.exports.emailVerification = async (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(
            async user => {
                // console.log(user.id)
                if (user.emailVerified) {
                    return res.status(421).json({
                        error: 'user already confirmed'
                    });
                } else {
                    if (req.body.confirmationCode == user.confirmationCode) {
                        await User.update({
                            emailVerified: true,
                            confirmationCode: null
                        }, {
                            where: {
                                id: user.id
                            }
                        }).then(updated => {
                            return res.status(200).json({
                                message: 'email verification complete'
                            });
                        })
                    } else {
                        return res.status(422).json({
                            error: 'confirmation code is wrong'
                        });
                    }
                }
            })
        .catch(err => {
            return res.status(404).json({
                error: 'email not found'
            });
        });
};