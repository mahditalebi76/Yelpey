const expressLoader = require('./express');
const sequelizeLoader = require('./sequelize');

module.exports.init = async () => {
	const sequelizeConnection = await sequelizeLoader.DBConnection();
	console.log('DB Intialized');
	await expressLoader.expressLoader();
	console.log('Express Intialized');

	// ... more loaders can be here

	// ... Initialize agenda
	// ... or Redis, or whatever you want
};
