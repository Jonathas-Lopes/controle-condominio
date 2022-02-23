const mongoose = require("mongoose");
const UserSchema = require("../db/schema/userSchema");

const UserModel = mongoose.model("user", UserSchema);

const user = {
	async listUsers(_id) {
		if (_id) {
			return UserModel.find({ _id: _id });
		}
		return UserModel.find({});
	},
	async insertUser(userOBJ) {
		try {
			return UserModel.insertMany(userOBJ);
		} catch (error) {
			return {
				statusCode: 500,
				error: "internal error",
			};
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
