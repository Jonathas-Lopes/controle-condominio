const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const middleware = require("../middlewares/userMiddleware");

router.get("/", userController.getUsers);
router.post("/", middleware.validateUser, userController.newUser);
router.put("/", middleware.validateUser, userController.updateUser);
router.delete("/", userController.deleteUser);
module.exports = router;
