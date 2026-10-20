// User routes - connects each URL to a function in the user controller.
const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.get("/:id/posts", userController.getUserPosts);

module.exports = router;
