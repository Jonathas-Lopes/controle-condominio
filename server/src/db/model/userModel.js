const mongoose = require("mongoose");
const UserSchema = require("../schema/userSchema");

const UserModel = mongoose.model("user", UserSchema);

const user = {
	async listUsers(_id) {
		if (_id) {
			return UserModel.find({ _id: _id });
		}
	},
	async insertUser(userArray) {
		return UserModel.insertMany(userArray);
	},
	async deleteUser(cpf) {
		return UserModel.deleteOne({ cpf: cpf });
	},
	UserModel,
};

module.exports = user;
