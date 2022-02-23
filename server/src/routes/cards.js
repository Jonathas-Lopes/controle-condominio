var express = require('express');
var router = express.Router();
const cardController = require('../controller/cardController')


router.get('/', async function(req, res, next) {
  res.send(await cardController.listCards());
});
router.get('/:cardType', async function(req, res, next) {
  res.send( await cardController.listCards(req.params.cardType));
});
router.post('/new', async function(req, res, next) {
  await cardController.insertCard(req.body);
});
router.post('/update', async function(req, res, next) {
    await cardController.updateCard(req.body);
  });
router.get('/delete/:cardId', async function(req, res, next) {
  await cardController.deleteCard(req.params.cardId);
});
module.exports = router;
