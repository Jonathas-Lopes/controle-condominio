const mongoose = require("mongoose");
const CardSchema = require("../schema/cardSchema");

const CardModel = mongoose.model("card", CardSchema);

const card = {
	async listCards(type) {
		if (type) {
			return CardModel.find({ type: type });
		}
		return CardModel.find({});
	},

	async insertCard(cardArray) {
		await CardModel.insertMany(cardArray);
	},
	async deleteCard(_id) {
		await CardModel.deleteOne({ _id });
	},
	CardModel,
};
module.exports = card;
