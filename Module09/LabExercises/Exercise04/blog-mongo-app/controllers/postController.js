// Post controller - the logic for creating, reading, updating and deleting posts.
const { User, Post, Comment, Like } = require("../models");
const { httpError, findOrFail } = require("./helpers");

// Only the author can change or delete their post.
// (There is no login yet, so the author's user_id is sent in the request body.)
const checkAuthor = (post, userId) => {
  if (!userId) throw httpError(400, "user_id is required");
  if (post.user_id.toString() !== userId) {
    throw httpError(403, "Only the author can change this post");
  }
};

// POST /api/posts
const createPost = async (req, res) => {
  const { user_id, title, description, image_url } = req.body;

  await findOrFail(User, user_id, "User");
  const post = await Post.create({ user_id, title, description, image_url });

  res.status(201).json(post);
};

// GET /api/posts - all posts, newest first, with the author's username and like count
const getPosts = async (req, res) => {
  const posts = await Post.find()
    .populate("user_id", "username")
    .sort({ created_at: -1 })
    .lean();

  // Count likes instead of storing a like count (same rule as Module 8)
  const result = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      like_count: await Like.countDocuments({ post_id: post._id }),
    }))
  );

  res.json(result);
};

// GET /api/posts/:id - one post with its comments and like count
const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate("user_id", "username").lean();
  if (!post) throw httpError(404, "Post not found");

  const comments = await Comment.find({ post_id: post._id })
    .populate("user_id", "username")
    .sort({ created_at: 1 });
  const like_count = await Like.countDocuments({ post_id: post._id });

  res.json({ ...post, like_count, comments });
};

// PUT /api/posts/:id
const updatePost = async (req, res) => {
  const post = await findOrFail(Post, req.params.id, "Post");
  checkAuthor(post, req.body.user_id);

  // Only these 3 fields can be changed
  const { title, description, image_url } = req.body;
  if (title !== undefined) post.title = title;
  if (description !== undefined) post.description = description;
  if (image_url !== undefined) post.image_url = image_url;

  await post.save();
  res.json(post);
};

// DELETE /api/posts/:id
const deletePost = async (req, res) => {
  const post = await findOrFail(Post, req.params.id, "Post");
  checkAuthor(post, req.body.user_id);

  // Remove the post's comments and likes too, so nothing is left pointing at it
  await Comment.deleteMany({ post_id: post._id });
  await Like.deleteMany({ post_id: post._id });
  await post.deleteOne();

  res.json({ message: "Post deleted" });
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
