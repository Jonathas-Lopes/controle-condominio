const userModel = require("../db/model/userModel");

const controller = {
	async getUsers(req, res, _next) {
		res.send(await userModel.listUsers(req.query.userId));
	},
	async newUser(req, res, next) {
		res.send(await userModel.insertUser(req.body));
	},
	async updateUser(req, res, next) {
		res.send(await userModel.updateUser(req.body));
	},
	async deleteUser(req, res, next) {
		res.send(await userModel.deleteUser(req.query.userId));
	},
};
module.exports = controller;
