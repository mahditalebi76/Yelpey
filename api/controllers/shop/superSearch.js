const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Category = db.categories;
const Address = db.addresses;
const Sequelize = require('sequelize');
const sequelize = require('../../../database-connection');
const _ = require('lodash');
module.exports.superSearch = (req, res) => {
    let shopWhere
    if (req.body.name) {
        shopWhere = {
            categoryId: req.body.categoryId,
            name: {
                [Sequelize.Op.like]: '%' + req.body.name + '%'
            },
            isOpen: req.body.isOpen
        }
    } else {
        shopWhere = {
            categoryId: req.body.categoryId,
            isOpen: req.body.isOpen
        }
    }

    let addressWhere = {
        cityId: req.body.cityId
    };
    shopWhere = Object.entries(shopWhere).reduce(
        (a, [k, v]) =>
        v == null ?
        a :
        {
            ...a,
            [k]: v
        }, {}
    );
    addressWhere = Object.entries(addressWhere).reduce(
        (a, [k, v]) =>
        v == null ?
        a :
        {
            ...a,
            [k]: v
        }, {}
    );

    User.findOne({
            where: {
                id: req.user.id
            },
            include: [{
                raw: true,
                nest: true,
                model: Address,
                as: 'address'
            }]
        })
        .then(user => {
            lat = 36.56115;
            lng = 52.68165;
            if (user.address != null) {
                location = user.address.location.coordinates;
                lat = location[0];
                lng = location[1];
            }
            Shop.findAll({
                    raw: true,
                    nest: true,
                    where: shopWhere,
                    attributes: {
                        include: [
                            [
                                sequelize.literal(
                                    'Case when "rateCount"=0 then 0 Else CAST("rateSum" AS float) / CAST("rateCount" AS float) End'
                                ),
                                'rate'
                            ]
                        ]
                    },
                    include: [
                        'category',
                        'address',
                        'thumbnail',
                        {
                            model: Address,
                            as: 'address',
                            where: addressWhere,
                            attributes: {
                                include: [
                                    [
                                        sequelize.cast(
                                            Sequelize.fn(
                                                'ST_Distance',
                                                Sequelize.col('location'),
                                                Sequelize.fn('ST_MakePoint', lat, lng)
                                            ),
                                            'integer'
                                        ),
                                        'distance'
                                    ]
                                ]
                            }
                        }
                    ]
                })

                .then(shops => {
                    let orderWay = 'desc';
                    switch (req.body.orderBy) {
                        case 'distance':
                            orderWay = 'asc';
                            break;
                        case 'rate':
                            orderWay = 'desc';
                            break;
                        case 'newest':
                            orderWay = 'desc';
                            break;
                        case 'lastUpdated':
                            orderWay = 'desc';
                            break;
                        default:
                            orderWay = 'desc';
                    }

                    sorted = _.orderBy(
                        shops,
                        function (shop) {
                            let order = shop.rate;
                            switch (req.body.orderBy) {
                                case 'distance':
                                    order = shop.address.distance;
                                    break;
                                case 'rate':
                                    order = shop.rate;
                                    break;
                                case 'newest':
                                    order = shop.createdAt;
                                    break;
                                case 'lastUpdated':
                                    order = shop.updatedAt;
                                    break;
                                default:
                                    order = shop.rate;
                            }
                            return order;
                        },
                        [orderWay]
                    );
                    return res.status(200).json({
                        sorted
                    });
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).json({
                        err: 'server error: finding shops1'
                    });
                });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: 'server error: finding user1'
            });
        });
};