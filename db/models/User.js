const Sequelize = require('sequelize');
const dbConnection = require('../../db/database-connection');

// !-------------------User definition in database------------------------
const User = dbConnection.define('user', {
	userId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING
	},
	email: {
		allowNull: false,
		type: Sequelize.STRING,
		unique: true
	},
	confirmationCode: {
		type: Sequelize.STRING
	},
	forgotPasswordCode: {
		type: Sequelize.STRING
	},
	phoneNumber: {
		type: Sequelize.BIGINT,
		unique: true
	},
	birthDate: {
		type: Sequelize.DATE
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	//avatar
	avatarId: {
		type: Sequelize.INTEGER
	},
	sex: {
		type: Sequelize.STRING,
		in: ['female', 'male', ]
	},
	verificationAddressId: {
		type: Sequelize.INTEGER,
		unique: true
	},
	nationalCardId: {
		type: Sequelize.INTEGER,
		unique: true
	},
	nationalCode: {
		type: Sequelize.BIGINT,
		unique: true
	},
	emailConfirmed: {
		type: Sequelize.BOOLEAN,
	},
	nationalCardConfirmed: {
		type: Sequelize.BOOLEAN,
	},
	phoneConfirmed: {
		type: Sequelize.BOOLEAN,
	}
});

module.exports = User;