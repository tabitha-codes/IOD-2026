// User model - all the SQL for the "users" table.
// The ? placeholders let mysql2 insert values safely, which prevents SQL injection.
const { pool } = require("../dbConnect");

// Every column except password, so the password is never sent back.
const PUBLIC_COLUMNS = "user_id, username, email, created_at";

const create = async ({ username, email, password }) => {
  const [result] = await pool.execute(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password]
  );
  return findById(result.insertId);
};

const findAll = async () => {
  const [rows] = await pool.execute(`SELECT ${PUBLIC_COLUMNS} FROM users ORDER BY user_id`);
  return rows;
};

const findById = async (id) => {
  const [rows] = await pool.execute(`SELECT ${PUBLIC_COLUMNS} FROM users WHERE user_id = ?`, [id]);
  return rows[0]; // undefined if not found
};

module.exports = { create, findAll, findById };
