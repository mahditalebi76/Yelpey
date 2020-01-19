const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Category = db.categories;
const Address = db.addresses;
const Sequelize = require('sequelize');
const sequelize = require('../../../database-connection');
const {
    Op
} = require('sequelize');
const _ = require('lodash');


module.exports.getAddresses = (req, res) => {
    lat = req.body.lat;
    lng = req.body.lng;
    maxDistance = req.body.maxDistance;
    Address.findAll({
            where: Sequelize.where(Sequelize.fn(
                    'ST_DWithin',
                    Sequelize.col('location'),
                    Sequelize.fn('ST_MakePoint', lng, lat),
                    maxDistance
                ),
                true
            ),
            attributes: {
                include: [
                    [
                        Sequelize.fn(
                            'ST_Distance',
                            Sequelize.col('location'),
                            Sequelize.fn('ST_MakePoint', lng, lat)
                        ),
                        'distance'
                    ]
                ]
            },

            order: [
                [
                    sequelize.literal('distance '), sequelize.literal('ASC')
                ]
            ],
        })

        .then(async shops => {
            return res.status(200).json({
                shops
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: 'server error: finding shop'
            });
        });
};