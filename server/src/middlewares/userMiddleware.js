const validator = require("../utils/validators/userValidator");

const middleware = {
	async validateUser(req, res, next) {
		if (validator.hasInvalidField(req.body)) {
			res.status(400).send("invalid field");
			return;
		}
		next();
	},
};
module.exports = middleware;
