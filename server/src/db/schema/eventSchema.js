const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	date: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	_userId: {
		type: String,
		required: true,
	},
	imgPath: {
		type: String,
		required: false,
	},
});

module.exports = EventSchema;
