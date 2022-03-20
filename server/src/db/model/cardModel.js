const mongoose = require("mongoose");
const CardSchema = require("../schema/cardSchema");

const CardModel = mongoose.model("card", CardSchema);

const card = {
	async listCards(type) {
		if (type) {
			return CardModel.find({ type: type });
		}
		return false;
	},

	async insertCard(cardArray) {
		return CardModel.insertMany(cardArray);
	},
	async deleteCard(_id) {
		if (_id) {
			return CardModel.deleteOne({ _id });
		}
		return false;
	},
	CardModel,
};
module.exports = card;
