const mongoose = require("mongoose");
const UserSchema = require("../db/schema/userSchema");
const validator = require("../utils/validators/userValidator");

const UserModel = mongoose.model("user", UserSchema);

const user = {
	async listUsers(_id) {
		if (_id) {
			return UserModel.find({ _id: _id });
		}
		return UserModel.find({});
	},
	async insertUser(userArray) {
		if (!validator.hasInvalidField(userArray)) {
			try {
				return UserModel.insertMany(userArray);
			} catch (error) {
				return {
					statusCode: 500,
					error: "internal error",
				};
			}
		}
	},
	async deleteUser(cpf) {
		try {
			return UserModel.deleteOne({ cpf: cpf });
		} catch (error) {
			return {
				statusCode: 500,
				error: "internal error",
			};
		}
	},
	UserModel,
};

module.exports = user;
