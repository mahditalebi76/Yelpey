const Sequelize = require('sequelize');
const config = require('config');

//database info
name = process.env.SQL_NAME;
userName = process.env.SQL_USERNAME
password = process.env.SQL_PASSWORD;
host = process.env.SQL_HOST


const sequelize = new Sequelize(
	name, userName, password, {
		host: host,
		dialect: 'postgres',
		logging: false
	}
);

module.exports = sequelize;