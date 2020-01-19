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
var _ = require('lodash');

module.exports.getAroundShops = (req, res) => {
	lat = req.body.lat;
	lng = req.body.lng;
	maxDistance = req.body.maxDistance;
	// query = `
	// 	SELECT "shops".* , "addresses"."location", (Case when "rateCount"=0 then 0 Else CAST("rateSum" AS float) / CAST("rateCount" AS float) End) AS "rate"
	// 	 FROM "shops","addresses"
	//     WHERE "shops"."addressId"="addresses"."id" AND "addressId" IN
	//     (SELECT
	//         "id"
	//     FROM
	//         "addresses"
	//     WHERE
	//     ST_Distance(ST_MakePoint(:latitude, :longitude), "location") < 1000000)

	//     `;
	// sequelize
	// 	.query(query, {
	// 		model: Shop,
	// 		replacements: {
	// 			latitude: lat,
	// 			longitude: lng,
	// 			maxDistance
	// 		},
	// 		type: sequelize.QueryTypes.SELECT
	// 	})

	Shop.findAll({
			raw: true,
			nest: true,
			where: {},
			attributes: {
				include: [
					[sequelize.literal('Case when "rateCount"=0 then 0 Else CAST("rateSum" AS float) / CAST("rateCount" AS float) End'), 'rate']
				]
			},
			include: ['category', 'address', 'thumbnail',
				{
					model: Address,
					as: 'address',
					where: Sequelize.where(
						Sequelize.fn(
							'ST_DWithin',
							Sequelize.col('location'),
							Sequelize.fn('ST_MakePoint', lat, lng),
							maxDistance
						),
						true
					),
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
			sorted = _.orderBy(
				shops,
				function (shop) {
					return shop.address.distance;
				},
				['asc']
			);
			return res.status(200).json({
				shops: sorted
			});
		})
		.catch(err => {
			console.log(err);
			return res.status(500).json({
				err: 'server error: finding shop'
			});
		});
};