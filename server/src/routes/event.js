const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventController");

router.get("/", eventController.listEvents);
router.post("/", eventController.insertEvent);
router.put("/", eventController.updateEvent);
router.delete("/:eventId", eventController.deleteEvent);
module.exports = router;
