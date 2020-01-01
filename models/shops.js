'use strict';
module.exports = (sequelize, DataTypes) => {
	const shops = sequelize.define(
		'shops', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			addressId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				references: {
					model: 'addresses',
					key: 'id'
				}
			},
			categoryId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'categories',
					key: 'id'
				}
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: true,
				unique: true
			},
			phoneVerified: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			thumbnail: {
				type: DataTypes.INTEGER,
				allowNull: false,
				//TODO add default thumbnail for shops
				// defaultValue:1
				references: {
					model: 'images',
					key: 'id'
				}
			},
			isOpen: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			location: {
				type: DataTypes.STRING,
				allowNull: false
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE
			}
		}, {}
	);
	shops.associate = function (models) {
		shops.hasMany(models.comments)
		shops.hasMany(models.reviews)
		shops.hasMany(models.shopPosts)
		shops.hasMany(models.shopRates)

		// associations can be defined here
	};
	return shops;
};