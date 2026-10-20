// Like model - the linking collection for the many-to-many relationship
// between users and posts (Module 8).
const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);

// Same rule as Module 8: a user can only like a post once.
likeSchema.index({ post_id: 1, user_id: 1 }, { unique: true });

module.exports = mongoose.model("Like", likeSchema);
