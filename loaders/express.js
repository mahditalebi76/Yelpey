const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const router = require('../api/routes/router');
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minutes
	max: 100 // limit each IP to 100 requests per windowMs
});

module.exports.expressLoader = async () => {
	app.use(cors());
	app.use(helmet());
	app.use(
		bodyParser.urlencoded({
			extended: false
		})
	);
	app.use(limiter);
	app.use(bodyParser.json());

	// ...More middlewares

	// Return the express app
	return app;
};