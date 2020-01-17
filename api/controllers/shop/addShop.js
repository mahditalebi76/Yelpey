const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Image = db.images;
const Category = db.categories;
const Address = db.addresses;
const {
    createAddress
} = require('../address/addAddress')

module.exports.addShop = (req, res) => {
    //TODO check if user is verified first
    const point = {
        type: 'Point',
        coordinates: [req.body.lat, req.body.lng],
    };
    createAddress(req.body.postalCode, req.body.addressText, req.body.cityId, point)
        .then(address => {
            Shop.create({
                name: req.body.name,
                addressId: address.id,
                categoryId: req.body.categoryId,
                phoneVerified: false,
                isOpen: false,
            }).then(shop => {
                return res.status(200).json({
                    mess: 'shop added',
                    shop
                })
            }).catch(err => {
                console.log(err)
                return res.status(500).json({
                    err: 'server error: adding shop'
                })
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: 'server error: adding address'
            })
        })


}