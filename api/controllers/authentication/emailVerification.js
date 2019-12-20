const userController = require('../user');
const User = require('../../../db/models/User');
const bcrypt = require('bcryptjs');

module.exports.emailVerification = async (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(async user => {
            if (user.emailConfirmed) {
                return res.status(421).json({
                    error: 'user already confirmed'
                });
            } else {

                if (req.body.confirmationCode == user.confirmationCode) {
                    //correct code
                    await userController.updateUser(user.userId, {
                        emailConfirmed: true,
                        confirmationCode: null
                    });
                    return res.status(200).json({
                        message: 'email verification complete'
                    });
                } else {
                    //wrong code
                    return res.status(422).json({
                        error: 'confirmation code is wrong'
                    });
                }
            }
        })
        .catch(err => {
            return res.status(404).json({
                error: 'email not found1'
            });
        });
};