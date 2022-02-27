const res = require("express/lib/response");
const mongoose = require("mongoose");
const CardSchema = require("../db/schema/cardSchema");
const validator = require("../utils/validators/cardValidator");

const CardModel = mongoose.model("card", CardSchema);

const card = {
	async listCards(type) {
		if (type) {
			return CardModel.find({ type: type });
		}
		return CardModel.find({});
	},
	async insertCard(cardArray) {
		if (!validator.hasInvalidField(cardArray)) {
			try {
				await CardModel.insertMany(cardArray);
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
		}
	},
	async deleteCard(_id) {
		try {
			await CardModel.deleteOne({ _id });
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
	CardModel,
};
module.exports = card;
