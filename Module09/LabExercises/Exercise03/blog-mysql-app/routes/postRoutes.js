// Post routes - posts, plus the comments and likes that belong to a post.
const express = require("express");
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");
const likeController = require("../controllers/likeController");

const router = express.Router();

// Posts
router.post("/", postController.createPost);
router.get("/", postController.getPosts);
router.get("/:id", postController.getPostById);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

// Comments on a post
router.post("/:id/comments", commentController.addComment);
router.get("/:id/comments", commentController.getComments);

// Likes on a post
router.post("/:id/likes", likeController.likePost);
router.get("/:id/likes", likeController.getLikes);
router.delete("/:id/likes", likeController.unlikePost);

module.exports = router;
