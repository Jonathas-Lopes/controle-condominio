var express = require("express");
var router = express.Router();
const eventController = require("../controller/eventController");

router.get("/", async function (_req, res, _next) {
	res.send(await eventController.listEvents());
});
router.get("/:eventId", async function (req, res, _next) {
	res.send(await eventController.listEvents(req.params.eventId));
});
router.post("/new", async function (req, res, _next) {
	res.send(await eventController.insertEvent(req.body));
});
router.post("/update", async function (req, res, _next) {
	res.send(await eventController.updateEvent(req.body));
});
router.get("/delete/:eventId", async function (req, res, _next) {
	res.send(await eventController.deleteEvent(req.params.eventId));
});
module.exports = router;
