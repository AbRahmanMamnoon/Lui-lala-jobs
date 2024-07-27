const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");
const imageMiddleware = require("../middelware/imageMiddleware");

router.post(
  "/",
  imageMiddleware.upload.single("image"),
  imageController.uploadImage
);
router.get("/", imageController.getImages);
router.get("/:id", imageController.getImageById);

module.exports = router;
