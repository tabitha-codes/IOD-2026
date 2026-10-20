// Comment controller - users commenting on posts.
const { User, Post, Comment } = require("../models");
const { findOrFail, requireFields } = require("./helpers");

// POST /api/posts/:id/comments
const addComment = async (req, res) => {
  const post = await findOrFail(Post, req.params.id, "Post");
  const user = await findOrFail(User, req.body.user_id, "User");
  requireFields(req.body, ["comment_text"]);

  const comment = await Comment.create({
    post_id: post.post_id,
    user_id: user.user_id,
    comment_text: req.body.comment_text.trim(),
  });
  res.status(201).json(comment);
};

// GET /api/posts/:id/comments
const getComments = async (req, res) => {
  const post = await findOrFail(Post, req.params.id, "Post");
  res.json(await Comment.findByPost(post.post_id));
};

module.exports = { addComment, getComments };
