var express = require('express');
var router = express.Router();
const eventController = require('../controller/eventController')


router.get('/', async function(req, res, next) {
  res.send(await eventController.listEvents());
});
router.get('/:eventId', async function(req, res, next) {
  res.send(await eventController.listEvents(req.params.eventId));
});
router.post('/new', async function(req, res, next) {
  await eventController.insertEvent(req.body);
});
router.post('/update', async function(req, res, next) {
  await eventController.updateEvent(req.body);
});
router.get('/delete/:eventId', async function(req, res, next) {
  await eventController.deleteEvent(req.params.eventId)
});
module.exports = router;
