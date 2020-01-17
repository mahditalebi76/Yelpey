const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Category = db.categories;
const Address = db.addresses;
const Sequelize = require('sequelize');
const sequelize = require('../../../database-connection');
const { Op } = require('sequelize');
const _ = require('lodash');

module.exports.getAroundShops = (req, res) => {
	lat = req.body.lat;
	lng = req.body.lng;
	maxDistance = req.body.maxDistance;
	query = `
        SELECT "shops".* , "addresses"."location" FROM "shops","addresses" 
        WHERE "shops"."addressId"="addresses"."id" AND "addressId" IN 
        (SELECT
            "id"
        FROM
            "addresses"
        WHERE
        ST_Distance(ST_MakePoint(:latitude, :longitude), "location") < 1000000)
        
        `;
	sequelize
		.query(query, {
			model: Shop,

			replacements: {
				latitude: lat,
				longitude: lng,
				maxDistance
			},
			type: sequelize.QueryTypes.SELECT
		})
		.then(async shops => {
			// list = []
			// await _.forEach(shops, (shop, key) => {
			//     Shop.findOne({
			//         where: {
			//             id: shop.id
			//         }
			//     }).then(shop => {
			//         list.push(shop)
			//     })
			// })
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
