// Like controller - other users liking and unliking posts.
const { User, Post, Like } = require("../models");
const { httpError, findOrFail } = require("./helpers");

// POST /api/posts/:id/likes
const likePost = async (req, res) => {
  const { user_id } = req.body;

  const post = await findOrFail(Post, req.params.id, "Post");
  await findOrFail(User, user_id, "User");

  // Users can only like other people's posts, not their own
  if (post.user_id.toString() === user_id) {
    throw httpError(400, "You can't like your own post");
  }

  // The unique index stops the same user liking twice (returns 409)
  const like = await Like.create({ post_id: post._id, user_id });
  res.status(201).json(like);
};

// DELETE /api/posts/:id/likes - remove a like
const unlikePost = async (req, res) => {
  if (!req.body.user_id) throw httpError(400, "user_id is required");
  const result = await Like.deleteOne({ post_id: req.params.id, user_id: req.body.user_id });
  if (result.deletedCount === 0) throw httpError(404, "Like not found");
  res.json({ message: "Like removed" });
};

// GET /api/posts/:id/likes - like count and who liked it
const getLikes = async (req, res) => {
  await findOrFail(Post, req.params.id, "Post");

  const likes = await Like.find({ post_id: req.params.id }).populate("user_id", "username");
  res.json({ like_count: likes.length, likes });
};

module.exports = { likePost, unlikePost, getLikes };
