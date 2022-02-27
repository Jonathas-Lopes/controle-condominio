const Joi = require("joi");

const validation = {
	validator: Joi.object({
		_id: Joi.string().length(24),
		type: Joi.string().alphanum().max(8).required(),
		description: Joi.string().required(),
		body: Joi.string().required(),
		_userId: Joi.string().length(24).required(),
		imgPath: Joi.string().regex(/^\/\[a-zA-Z]+\/\[a-zA-Z]+$/),
	}),
	hasInvalidField: (array) => {
		array
			.map((item) => {
				try {
					validation.validator.validate(item);
				} catch (err) {
					return "error";
				}
			})
			.includes("error");
	},
};

module.exports = validation;
