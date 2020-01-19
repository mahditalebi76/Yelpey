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
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id'
				}
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			desciption: {
				type: DataTypes.TEXT,
				allowNull: true
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
			imageId: {
				type: DataTypes.INTEGER,
				allowNull: true,
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
			rateSum: {
				type: DataTypes.INTEGER,
				defaultValue: 0
			},
			rateCount: {
				type: DataTypes.INTEGER,
				defaultValue: 0
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
		shops.belongsTo(models.addresses, {
			foreignKey: 'addressId',
			as: 'address'
		})
		shops.belongsTo(models.images, {
			foreignKey: 'imageId',
			as: 'thumbnail'
		})
		shops.belongsTo(models.categories, {
			foreignKey: 'categoryId',
			as: 'category'
		})
		shops.belongsTo(models.users, {
			foreignKey: 'userId',
			as: 'user'
		})
		// associations can be defined here
	};
	return shops;
};