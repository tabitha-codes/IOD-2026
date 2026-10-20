// User controller - the logic for creating and reading users.
// Express 5 automatically passes errors from async functions to the error handler,
// so these functions don't need their own try/catch.
const bcrypt = require("bcryptjs");
const { User, Post } = require("../models");
const { httpError, findOrFail } = require("./helpers");

// POST /api/users
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (typeof password !== "string" || password.length < 6) {
    throw httpError(400, "Password must be text with at least 6 characters");
  }

  // Never store the real password - store a hash instead.
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });

  // Send the user back without the password
  const { password: _removed, ...userData } = user.toObject();
  res.status(201).json(userData);
};

// GET /api/users
const getUsers = async (req, res) => {
  const users = await User.find().sort({ created_at: -1 });
  res.json(users);
};

// GET /api/users/:id
const getUserById = async (req, res) => {
  const user = await findOrFail(User, req.params.id, "User");
  res.json(user);
};

// GET /api/users/:id/posts - every post written by one user
const getUserPosts = async (req, res) => {
  await findOrFail(User, req.params.id, "User");
  const posts = await Post.find({ user_id: req.params.id }).sort({ created_at: -1 });
  res.json(posts);
};

module.exports = { createUser, getUsers, getUserById, getUserPosts };
