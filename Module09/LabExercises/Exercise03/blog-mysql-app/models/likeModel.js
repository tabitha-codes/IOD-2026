// Like model - all the SQL for the "likes" linking table.
const { pool } = require("../dbConnect");

// The UNIQUE (post_id, user_id) rule in MySQL blocks the same like twice (Error 1062).
const create = async ({ post_id, user_id }) => {
  const [result] = await pool.execute("INSERT INTO likes (post_id, user_id) VALUES (?, ?)", [
    post_id,
    user_id,
  ]);
  return { like_id: result.insertId, post_id, user_id };
};

// Returns true if a like was removed
const remove = async ({ post_id, user_id }) => {
  const [result] = await pool.execute("DELETE FROM likes WHERE post_id = ? AND user_id = ?", [
    post_id,
    user_id,
  ]);
  return result.affectedRows > 0;
};

// Who liked a post
const findByPost = async (postId) => {
  const [rows] = await pool.execute(
    `SELECT likes.like_id, likes.user_id, users.username
     FROM likes
     JOIN users ON likes.user_id = users.user_id
     WHERE likes.post_id = ?
     ORDER BY likes.like_id`,
    [postId]
  );
  return rows;
};

module.exports = { create, remove, findByPost };
