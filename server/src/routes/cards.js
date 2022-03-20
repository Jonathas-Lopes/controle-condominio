const express = require("express");
const router = express.Router();
const cardController = require("../controller/cardController");
const middleware = require("../middlewares/cardMiddleware");

router.get("/", middleware.validateCardType, cardController.getCards);
router.post("/", middleware.validateCard, cardController.newCard);
router.put("/", middleware.validateCard, cardController.updateCard);
router.delete("/:cardId", cardController.deleteCard);
module.exports = router;
