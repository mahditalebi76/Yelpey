'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			'users', {
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true,
					allowNull: false
				},
				email: {
					allowNull: false,
					type: Sequelize.STRING,
					unique: true
				},
				emailVerified: {
					type: Sequelize.BOOLEAN
				},
				phoneNumber: {
					type: Sequelize.STRING,
					unique: true
				},
				phoneVerified: {
					type: Sequelize.BOOLEAN
				},
				userType: {
					type: Sequelize.STRING,
					in: ['normal', 'Owner', 'admin']
				},
				password: {
					type: Sequelize.STRING,
					allowNull: false
				},
				firstName: {
					type: Sequelize.STRING
				},
				lastName: {
					type: Sequelize.STRING
				},
				sex: {
					type: Sequelize.STRING,
					in: ['female', 'male']
				},
				addressId: {
					//refrences addresses
					type: Sequelize.INTEGER,
					unique: true
					// references: {
					//   model: 'addresses', // name of Target model
					//   key: 'id', // key in Target model that we're referencing
					// },
				},
				birthday: {
					type: Sequelize.DATE
				},
				//avatar
				avatarId: {
					//refrences images
					type: Sequelize.INTEGER
					// references: {
					//   model: 'images', // name of Target model
					//   key: 'id', // key in Target model that we're referencing
					// },
				},
				confirmationCode: {
					type: Sequelize.STRING
				},
				forgotPasswordCode: {
					type: Sequelize.STRING
				},
				nationalCode: {
					type: Sequelize.STRING,
					unique: true
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE
				}
			}, {}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	}
};