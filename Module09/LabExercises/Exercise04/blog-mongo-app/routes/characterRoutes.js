// Character routes - connects each URL to a function in the character controller.
const express = require("express");
const characterController = require("../controllers/characterController");

const router = express.Router();

router.get("/", characterController.getCharacters);
router.get("/:id", characterController.getCharacterById);

module.exports = router;