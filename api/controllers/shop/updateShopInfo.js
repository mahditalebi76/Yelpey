const db = require('../../../models/index');
const User = db.users;
const Image = db.images;
const Shop = db.shops;
const Resize = require('../image/Resize');
const path = require('path');
const addressController = require('../address/addAddress');
const {
    updateOrCreate
} = require('../../middlewares/updateOrCreate');

module.exports.updateShopInfo = async (req, res) => {
    Shop.findOne({
            where: {
                id: req.body.id
            }
        })
        .then(shop => {
            const imagePath = path.join(__dirname, '../../../public/shops');
            const info = `img${shop.id}__${shop.name}.jpg`;
            const fileUpload = new Resize(imagePath, info);
            let ImageName = 'img' + shop.id + '__' + shop.name + '.jpg';
            let imageUrl = '/public/shops/' + ImageName

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
                        Shop.update({
                                name: req.body.name,
                                categoryId: req.body.categoryId,
                                phone: req.body.phone,
                                imageId: image.id,
                                isOpen: req.body.isOpen,
                            }, {
                                where: {
                                    id: shop.id
                                }
                            })
                            .then(updated => {
                                return res.status(200).json({
                                    message: 'shop Updated'
                                });
                            })
                            .catch(err => {
                                return res.status(500).json({
                                    message: 'update failed'
                                });
                            });
                    })

                })

        })


};