const Joi = require("joi");

const validation = {
	validator: Joi.object({
		_id: Joi.string().length(24),
		email: Joi.string().email().required(),
		password: Joi.string()
			.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
			.required(),
		name: Joi.string().required(),
		cpf: Joi.string().length(11).alphanum().required(),
		apt: Joi.string().length(5).required(),
		torre: Joi.string().length(5).required(),
		admin: Joi.boolean(),
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
