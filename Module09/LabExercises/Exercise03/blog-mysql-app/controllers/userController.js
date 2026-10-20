// User controller - the logic for creating and reading users.
// Express 5 automatically passes errors from async functions to the error handler,
// so these functions don't need their own try/catch.
const bcrypt = require("bcryptjs");
const { User, Post } = require("../models");
const { httpError, findOrFail, requireFields } = require("./helpers");

// POST /api/users
const createUser = async (req, res) => {
  requireFields(req.body, ["username", "email", "password"]);
  const username = req.body.username.trim();
  const email = req.body.email.trim().toLowerCase();
  const { password } = req.body;

  if (username.length > 50) throw httpError(400, "Username must be 50 characters or less");
  if (!/^\S+@\S+\.\S+$/.test(email)) throw httpError(400, "Email is not valid");
  if (password.length < 6) throw httpError(400, "Password must be at least 6 characters");

  // Never store the real password - store a hash instead.
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });

  res.status(201).json(user);
};

// GET /api/users
const getUsers = async (req, res) => {
  res.json(await User.findAll());
};

// GET /api/users/:id
const getUserById = async (req, res) => {
  res.json(await findOrFail(User, req.params.id, "User"));
};

// GET /api/users/:id/posts - every post written by one user
const getUserPosts = async (req, res) => {
  const user = await findOrFail(User, req.params.id, "User");
  res.json(await Post.findByUser(user.user_id));
};

module.exports = { createUser, getUsers, getUserById, getUserPosts };
