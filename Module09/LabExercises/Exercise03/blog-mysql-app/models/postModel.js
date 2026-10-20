// Post model - all the SQL for the "posts" table.
const { pool } = require("../dbConnect");

// Each post with its author's username and a like count.
// The like count is calculated with COUNT, not stored (Module 8 normalization rule).
const SELECT_POSTS = `
  SELECT posts.post_id, posts.user_id, users.username AS author,
         posts.title, posts.description, posts.image_url, posts.created_at,
         (SELECT COUNT(*) FROM likes WHERE likes.post_id = posts.post_id) AS like_count
  FROM posts
  JOIN users ON posts.user_id = users.user_id`;

const create = async ({ user_id, title, description, image_url }) => {
  const [result] = await pool.execute(
    "INSERT INTO posts (user_id, title, description, image_url) VALUES (?, ?, ?, ?)",
    [user_id, title, description ?? null, image_url ?? null]
  );
  return findById(result.insertId);
};

const findAll = async () => {
  const [rows] = await pool.execute(`${SELECT_POSTS} ORDER BY posts.created_at DESC, posts.post_id DESC`);
  return rows;
};

const findById = async (id) => {
  const [rows] = await pool.execute(`${SELECT_POSTS} WHERE posts.post_id = ?`, [id]);
  return rows[0];
};

const findByUser = async (userId) => {
  const [rows] = await pool.execute(
    `${SELECT_POSTS} WHERE posts.user_id = ? ORDER BY posts.created_at DESC, posts.post_id DESC`,
    [userId]
  );
  return rows;
};

const update = async (id, { title, description, image_url }) => {
  await pool.execute(
    "UPDATE posts SET title = ?, description = ?, image_url = ? WHERE post_id = ?",
    [title, description, image_url, id]
  );
  return findById(id);
};

// Comments and likes point at the post (foreign keys), so they're deleted first.
// A transaction makes sure all 3 deletes happen together, or none of them do.
const remove = async (id) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    await connection.execute("DELETE FROM comments WHERE post_id = ?", [id]);
    await connection.execute("DELETE FROM likes WHERE post_id = ?", [id]);
    await connection.execute("DELETE FROM posts WHERE post_id = ?", [id]);
    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

module.exports = { create, findAll, findById, findByUser, update, remove };
