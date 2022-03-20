const validator = require("../utils/validators/cardValidator");

const middleware = {
	async validateCard(req, res, next) {
		if (validator.hasInvalidField(req.body)) {
			res.status(400).send("invalid field");
			return;
		}
		next();
	},
	async validateCardType(req, res, next) {
		if (!validator.hasInvalidCardType(req.query.cardType)) {
			res.status(400).send("invalid cardType");
			return;
		}
		next();
	},
};
module.exports = middleware;
