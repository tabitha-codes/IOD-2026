// Comment controller - users commenting on posts.
const { User, Post, Comment } = require("../models");
const { findOrFail } = require("./helpers");

// POST /api/posts/:id/comments
const addComment = async (req, res) => {
  const { user_id, comment_text } = req.body;

  await findOrFail(Post, req.params.id, "Post");
  await findOrFail(User, user_id, "User");

  const comment = await Comment.create({ post_id: req.params.id, user_id, comment_text });
  res.status(201).json(comment);
};

// GET /api/posts/:id/comments
const getComments = async (req, res) => {
  await findOrFail(Post, req.params.id, "Post");

  const comments = await Comment.find({ post_id: req.params.id })
    .populate("user_id", "username")
    .sort({ created_at: 1 });
  res.json(comments);
};

module.exports = { addComment, getComments };
