const db = require('../../../models/index');
const User = db.users;

module.exports.userInfo = async (req, res) => {
    // {
    //     req body:
    //         firstName,
    //         lastName,
    //         sex,
    //         brithday,
    //         nationalCode,
    //         phoneNumber
    // }
    User.update({
            phoneNumber: req.body.phoneNumber,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            sex: req.body.sex,
            //TODO address
            birthday: req.body.birthday,
            //TODO avatar
            nationalCode: req.body.nationalCode
        }, {
            where: {
                id: req.user.id
            }
        })
        .then(updated => {
            return res.status(200).json({
                message: 'user Updated'
            });
        })
        .catch(err => {
            return res.status(500).json({
                message: 'update failed'
            });
        });
};