const Sequelize = require('sequelize');
const config = require('config');

module.exports.DBConnection = async () => {
	name = process.env.SQL_NAME;
	userName = process.env.SQL_USERNAME;
	password = process.env.SQL_PASSWORD;
	host = process.env.SQL_HOST;

	const sequelize = await new Sequelize(name, userName, password, {
		host: host,
		dialect: 'postgres',
		logging: false
	});
	sequelize.sync();
	return;
};
//database info
