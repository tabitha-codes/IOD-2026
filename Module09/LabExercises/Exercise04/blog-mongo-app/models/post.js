// Post model - matches the "posts" collection from Module 8.
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    // Links the post to the user who wrote it (like a foreign key)
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, trim: true },
    image_url: { type: String, trim: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);

module.exports = mongoose.model("Post", postSchema);
