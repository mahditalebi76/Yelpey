const db = require('../../../models/index');
const User = db.users;
const Address = db.addresses
const City = db.cities
const Shop = db.shops;
const {
    createAddress
} = require('./addAddress')


module.exports.addShopAddress = (req, res) => {
    Shop.findOne({
            where: {
                id: req.body.id
            },
            attributes: ['id', 'addressId']
        }).then(shop => {
            const point = {
                type: 'Point',
                coordinates: [req.body.lat, req.body.lng],
            };
            //user does not have an address
            if (!shop.addressId) {
                createAddress(req.body.postalCode, req.body.addressText, req.body.cityId, point)
                    .then(addressAdded => {
                        Shop.update({
                            addressId: addressAdded.id
                        }, {
                            where: {
                                id: shop.addressId
                            }
                        })
                        return res.status(200).json({
                            mess: "address updated",
                            address: addressAdded
                        })
                    })
                    .catch(err => {
                        return res.status(500).json({
                            err: "server error: adding address"
                        })
                    })
            }
            //user already has an address
            else {
                Address.update({
                    postalCode: req.body.postalCode,
                    addressText: req.body.addressText,
                    cityId: req.body.cityId,
                    location: point,
                    verified: false
                }, {
                    where: {
                        id: shop.addressId
                    },
                    returning: true
                }).then(updatedAddress => {

                    return res.status(200).json({
                        mess: "address updated",
                        updatedAddress: updatedAddress[1]
                    })
                }).catch(err => {
                    console.log(err)
                    return res.status(500).json({
                        err: "server error: update address"
                    })
                })
            }

        })

        .catch(err => {
            return res.status(500).json({
                err: "server error: user not found"
            })
        })
}