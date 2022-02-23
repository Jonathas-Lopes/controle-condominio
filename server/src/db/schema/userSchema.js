const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	_id: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	cpf: {
		type: String,
		required: true,
	},
	apt: {
		type: String,
		required: true,
	},
	torre: {
		type: String,
		required: true,
	},
	admin: {
		type: Boolean,
		required: true,
		default: false,
	},
	imgPath: {
		type: String,
		required: false,
	},
});

module.exports = UserSchema;
