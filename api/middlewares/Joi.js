const Joi = require('@hapi/joi');
const middleware = schema => {
	return async (req, res, next) => {
		const {
			error
		} = schema.validate(req.body);
		const valid = error == null;
		if (valid) {
			next();
		} else {
			const {
				details
			} = error;
			const outputErrors = new Object();
			await details.forEach(item => {
				if (outputErrors[item.path]) {
					outputErrors[item.path].push(item.message);
				} else {
					outputErrors[item.path] = new Array(item.message);
				}
				console.log('err, ', item.message)
			});
			res.status(422).json({
				errors: outputErrors
			});
		}
	};
};
module.exports = middleware;