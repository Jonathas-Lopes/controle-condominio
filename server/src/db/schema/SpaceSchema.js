const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SpaceSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	rules: {
		type: String,
		required: true,
	},
	reservedBy: {
		type: String,
		required: true,
	},
	timeReserved: {
		type: String,
		required: true,
	},
	imgPath: {
		type: String,
		required: false,
	},
});

module.exports = SpaceSchema;
