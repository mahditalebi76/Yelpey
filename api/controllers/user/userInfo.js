const db = require('../../../models/index');
const User = db.users;
const Image = db.images;
const Resize = require('../image/Resize');
const path = require('path');
const addressController = require('../address/addAddress');
const {
    updateOrCreate
} = require('../../middlewares/updateOrCreate');

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
    const imagePath = path.join(__dirname, '../../../public/avatars');
    const info = `img${req.user.id}__${req.user.firstName}_${req.user.lastName}.jpg`;
    const fileUpload = new Resize(imagePath, info);
    let ImageName = 'img' + req.user.id + '__' + req.user.firstName + '_' + req.user.lastName + '.jpg';
    let imageUrl = process.env.BASE_URL + '/public/avatars/' + ImageName

    updateOrCreate(Image, {
            uploaderId: req.user.id,
            path: imageUrl
        }, {
            uploaderId: req.user.id,
            name: ImageName,
            path: imageUrl,
        })
        .then(async image => {
            if (req.file) {
                const filename = await fileUpload.save(req.file.buffer);
            }
            Image.findOne({
                where: {
                    uploaderId: req.user.id,
                    name: ImageName,
                    path: imageUrl,
                }
            }).then(image => {
                User.update({
                        phoneNumber: req.body.phoneNumber,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        sex: req.body.sex,
                        addressId: req.body.addressId,
                        birthday: req.body.birthday,
                        avatarId: image.id,
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
            })

        })

};