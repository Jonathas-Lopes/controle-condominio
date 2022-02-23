/* eslint-disable no-unused-vars */
var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
const cardController = require("../controller/cardController");

router.get("/", async function (_req, res, _next) {
	res.send(await cardController.listCards());
});
router.get("/:cardType", async function (req, res, _next) {
	res.send(await cardController.listCards(req.params.cardType));
});
router.post("/new", async function (req, res, _next) {
	res.send(await cardController.insertCard(req.body));
});
router.post("/update", async function (req, _res, _next) {
	res.send(await cardController.updateCard(req.body));
});
router.get("/delete/:cardId", async function (req, _res, _next) {
	res.send(await cardController.deleteCard(req.params.cardId));
});
module.exports = router;
