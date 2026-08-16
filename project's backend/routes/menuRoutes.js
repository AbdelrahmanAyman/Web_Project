const express = require("express");
const menuControllers = require("../controllers/menuController");
const upload = require("../middleware/upload");

const router = express.Router();

router
  .route("/")
  .get(menuControllers.getAllMenuItems)
  .post(upload.single("imageUrl"), menuControllers.createMenuItem);

router
  .route("/:id")
  .get(menuControllers.getMenuItemById)
  .patch(upload.single("imageUrl"), menuControllers.updateMenuItem)
  .delete(menuControllers.deleteMenuItem);

module.exports = router;