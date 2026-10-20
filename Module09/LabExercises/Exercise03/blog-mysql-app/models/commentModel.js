// Comment model - all the SQL for the "comments" table.
const { pool } = require("../dbConnect");

const create = async ({ post_id, user_id, comment_text }) => {
  const [result] = await pool.execute(
    "INSERT INTO comments (post_id, user_id, comment_text) VALUES (?, ?, ?)",
    [post_id, user_id, comment_text]
  );
  const [rows] = await pool.execute("SELECT * FROM comments WHERE comment_id = ?", [result.insertId]);
  return rows[0];
};

// Each comment with the username of the person who wrote it
const findByPost = async (postId) => {
  const [rows] = await pool.execute(
    `SELECT comments.comment_id, comments.post_id, comments.user_id,
            users.username AS commenter, comments.comment_text, comments.created_at
     FROM comments
     JOIN users ON comments.user_id = users.user_id
     WHERE comments.post_id = ?
     ORDER BY comments.created_at, comments.comment_id`,
    [postId]
  );
  return rows;
};

module.exports = { create, findByPost };
