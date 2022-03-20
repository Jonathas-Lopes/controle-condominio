const res = require("express/lib/response");
const mongoose = require("mongoose");
const EventSchema = require("../db/schema/eventSchema");

const EventModel = mongoose.model("event", EventSchema);

const event = {
	async listEvents(_id) {
		if (type) {
			return EventModel.find({ _id: _id });
		}
		return EventModel.find({});
	},
	async insertEvent(eventObj) {
		try {
			await EventModel.insertMany(eventObj);
			return {
				statusCode: 200,
				error: "ok",
			};
		} catch (error) {
			return {
				statusCode: 500,
				error: "internal error",
			};
		}
	},
	async deleteEvent(_id) {
		try {
			await EventModel.deleteOne({ _id });
			return {
				statusCode: 200,
				error: "ok",
			};
		} catch (error) {
			return {
				statusCode: 500,
				error: "internal error",
			};
		}
	},
	EventModel,
};

module.exports = event;
