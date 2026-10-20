// Comment model - matches the "comments" collection from Module 8.
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    comment_text: { type: String, required: true, trim: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);

module.exports = mongoose.model("Comment", commentSchema);
