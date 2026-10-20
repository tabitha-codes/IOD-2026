// Post controller - the logic for creating, reading, updating and deleting posts.
const { User, Post, Comment } = require("../models");
const { httpError, toId, findOrFail, requireFields } = require("./helpers");

// Only the author can change or delete their post.
// (There is no login yet, so the author's user_id is sent in the request body.)
const checkAuthor = (post, userIdValue) => {
  const userId = toId(userIdValue, "User");
  if (post.user_id !== userId) throw httpError(403, "Only the author can change this post");
};

const checkTitle = (title) => {
  if (title.length > 100) throw httpError(400, "Title must be 100 characters or less");
};

// POST /api/posts
const createPost = async (req, res) => {
  const user = await findOrFail(User, req.body.user_id, "User");
  requireFields(req.body, ["title"]);
  checkTitle(req.body.title.trim());

  const post = await Post.create({
    user_id: user.user_id,
    title: req.body.title.trim(),
    description: req.body.description,
    image_url: req.body.image_url,
  });
  res.status(201).json(post);
};

// GET /api/posts - all posts, newest first, with author and like count
const getPosts = async (req, res) => {
  res.json(await Post.findAll());
};

// GET /api/posts/:id - one post with its comments and like count
const getPostById = async (req, res) => {
  const post = await findOrFail(Post, req.params.id, "Post");
  const comments = await Comment.findByPost(post.post_id);
  res.json({ ...post, comments });
};

// PUT /api/posts/:id
const updatePost = async (req, res) => {
  const post = await findOrFail(Post, req.params.id, "Post");
  checkAuthor(post, req.body.user_id);

  // Keep the old value for any field that wasn't sent
  const title = req.body.title !== undefined ? String(req.body.title).trim() : post.title;
  if (!title) throw httpError(400, "Title can't be empty");
  checkTitle(title);

  const updated = await Post.update(post.post_id, {
    title,
    description: req.body.description !== undefined ? req.body.description : post.description,
    image_url: req.body.image_url !== undefined ? req.body.image_url : post.image_url,
  });
  res.json(updated);
};

// DELETE /api/posts/:id
const deletePost = async (req, res) => {
  const post = await findOrFail(Post, req.params.id, "Post");
  checkAuthor(post, req.body.user_id);

  await Post.remove(post.post_id);
  res.json({ message: "Post deleted" });
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
