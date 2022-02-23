var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
const spaceController = require("../controller/spaceController");

router.get("/", async function (req, res, next) {
	res.send(await spaceController.listSpaces());
});
router.get("/:spaceId", async function (req, res, next) {
	res.send(await spaceController.listSpaces(req.params.spaceId));
});
router.post("/new", async function (req) {
	res.send(await spaceController.insertSpace(req.body));
});
router.post("/update", async function (req, res) {
	res.send(await spaceController.updateSpace(req.body));
});
router.get("/delete/:spaceId", async function (req, res) {
	res.send(await spaceController.deleteSpace(req.params.spaceId));
});
router.post("/alocate", async function (req, res) {
	res.send(await spaceController.alocateSpace(req.body);)
});
module.exports = router;
