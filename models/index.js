'use strict';

var fs = require('fs');
var path = require('path');
var DataTypes = require('sequelize');
const basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};

if (config.use_env_variable) {
	var sequelize = new DataTypes(process.env[config.use_env_variable]);
} else {
	sequelize = new DataTypes(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
	.filter(file => {
		return (
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
		);
	})
	.forEach(file => {
		var model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.DataTypes = DataTypes;

module.exports = db;