const db = require('../../../models/index');
const User = db.users;
const Address = db.addresses
const City = db.cities
const {
    createAddress
} = require('./addAddress')


module.exports.addUserAddress = (req, res) => {
    User.findOne({
            where: {
                id: req.user.id
            },
            attributes: ['id', 'addressId']
        }).then(user => {
            const point = {
                type: 'Point',
                coordinates: [req.body.lat, req.body.lng],
            };
            //user does not have an address
            if (!user.addressId) {
                createAddress(req.body.postalCode, req.body.addressText, req.body.cityId, point)
                    .then(addressAdded => {
                        User.update({
                            addressId: addressAdded.id
                        }, {
                            where: {
                                id: req.user.id
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
                        id: user.addressId
                    }
                }).then(updatedAddress => {
                    addressUpdated = Address.findOne({
                        where: {
                            id: user.addressId
                        }
                    }).then(address => {
                        return res.status(200).json({
                            mess: "address updated",
                            address
                        })
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