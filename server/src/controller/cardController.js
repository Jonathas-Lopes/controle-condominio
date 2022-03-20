const cardModel = require("../db/model/cardModel");

const controller = {
	async getCards(req, res, _next) {
		res.send(await cardModel.listCards(req.query.cardType));
	},
	async newCard(req, res, _next) {
		res.send(await cardModel.insertCard(req.body));
	},
	async updateCard(req, res, _next) {
		res.send(await cardModel.updateCard(req.body));
	},
	async deleteCard(req, res, _next) {
		res.send(await cardModel.deleteCard(req.params.cardId));
	},
};
module.exports = controller;
