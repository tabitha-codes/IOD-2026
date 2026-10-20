// Like controller - other users liking and unliking posts.
const { User, Post, Like } = require("../models");
const { httpError, toId, findOrFail } = require("./helpers");

// POST /api/posts/:id/likes
const likePost = async (req, res) => {
  const post = await findOrFail(Post, req.params.id, "Post");
  const user = await findOrFail(User, req.body.user_id, "User");

  // The exercise says OTHER users like the posts
  if (post.user_id === user.user_id) throw httpError(400, "You can't like your own post");

  // If this user already liked the post, MySQL's UNIQUE rule returns Error 1062 -> 409
  const like = await Like.create({ post_id: post.post_id, user_id: user.user_id });
  res.status(201).json(like);
};

// DELETE /api/posts/:id/likes - remove a like
const unlikePost = async (req, res) => {
  const post_id = toId(req.params.id, "Post");
  const user_id = toId(req.body.user_id, "User");

  const removed = await Like.remove({ post_id, user_id });
  if (!removed) throw httpError(404, "Like not found");
  res.json({ message: "Like removed" });
};

// GET /api/posts/:id/likes - like count and who liked it
const getLikes = async (req, res) => {
  const post = await findOrFail(Post, req.params.id, "Post");
  const likes = await Like.findByPost(post.post_id);
  res.json({ like_count: likes.length, likes });
};

module.exports = { likePost, unlikePost, getLikes };
