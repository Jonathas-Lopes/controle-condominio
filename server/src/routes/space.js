const express = require("express");
const router = express.Router();
const spaceController = require("../controller/spaceController");

router.get("/", spaceController.listSpaces);
router.post("/", spaceController.insertSpace);
router.put("/", spaceController.updateSpace);
router.delete("/:spaceId", spaceController.deleteSpace);
router.put("/alocate", spaceController.alocateSpace);
module.exports = router;
