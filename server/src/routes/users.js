var express = require('express');
var router = express.Router();
const userController = require('../controller/userController')


router.get('/', async function(_req, res) {
  res.send(await userController.listUsers());
});
router.get('/:userId', async function(req, res) {
  res.send(await userController.listUsers(req.params.userId));
});
router.post('/new', async function(req) {
  await userController.insertUser(req.body);
});
router.post('/update', async function(req) {
  await userController.updateUser(req.body);
});
router.get('/delete/:userId', async function(req) {
  await userController.deleteUser(req.params.userId);
});
module.exports = router;
