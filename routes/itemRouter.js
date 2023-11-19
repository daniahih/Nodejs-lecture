const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemController");
// path / method http request
// logic , route
router.get("/", itemsController.getAllItems);

router.post("/", itemsController.createItem);

router.get("/:id", itemsController.getItemById);

router.put("/:id", itemsController.updateItem);

router.delete("/:id", itemsController.deleteItem);
module.exports = router;
