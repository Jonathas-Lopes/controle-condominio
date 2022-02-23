var express = require('express');
var router = express.Router();
const spaceController = require('../controller/spaceController')


router.get('/', async function(req, res, next) {
  res.send(await spaceController.listSpaces());
});
router.get('/:spaceId', async function(req, res, next) {
  res.send(await spaceController.listSpaces(req.params.spaceId));
});
router.post('/new', async function(req) {
  await spaceController.insertSpace(req.body);
});
router.post('/update', async function(req) {
  await spaceController.updateSpace(req.body);
});
router.get('/delete/:spaceId', async function(req) {
  await spaceController.deleteSpace(req.params.spaceId);
});
router.post('/alocate', async function(req) {
  await spaceController.alocateSpace(req.body);
});
module.exports = router;
