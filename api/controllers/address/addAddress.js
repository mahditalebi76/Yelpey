const db = require('../../../models/index');
const Gis = db.testGIS
const Address = db.addresses
const City = db.cities
// const {
//     Op
// } = require('sequelize')
// const sequelize = require('../../database-connection');


module.exports.createAddress = (postalCode, addressText, cityId, location) => {
    return new Promise((respond, reject) => {
        Address.create({
                postalCode,
                addressText,
                location,
                cityId,
                verified: false,
            }).then(address => {
                respond(address)
            })
            .catch(err => {
                reject(err)
            })
    })
}




module.exports.addAddressReq = (req, res) => {
    const point = {
        type: 'Point',
        coordinates: [req.body.lat, req.body.lng],
    };
    Address.create({
            postalCode: req.body.postalCode,
            addressText: req.body.addressText,
            cityId: req.body.cityId,
            location: point,
            verified: false,
        }).then(address => {
            return res.status(200).json({
                address
            })
        })
        .catch(err => {
            return res.status(500).json({
                err
            })
        })
}

module.exports.getAddresses = (req, res) => {
    Address.findAll({
            include: [{
                model: City
            }]
        }).then(addresses => {
            return res.status(200).json({
                addresses
            })
        })
        .catch(err => {
            return res.status(500).json({
                err
            })
        })
}