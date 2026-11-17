// REVIEW MODEL
// A review is either from someone who toured the place or someone who lives there.
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    // links the review to an apartment (like a foreign key)
    apartment_id: { type: mongoose.Schema.Types.ObjectId, ref: "Apartment", required: true },
    name: { type: String, required: [true, "Name is required"], trim: true, maxlength: 50 },
    review_type: {
      type: String,
      required: true,
      enum: { values: ["tour", "resident"], message: "Review type must be tour or resident" },
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be 1 to 5"],
      max: [5, "Rating must be 1 to 5"],
    },
    pros: { type: String, trim: true, maxlength: 1000 },
    cons: { type: String, trim: true, maxlength: 1000 },
    agent_name: { type: String, trim: true, maxlength: 50 },
    agent_notes: { type: String, trim: true, maxlength: 1000 },
    photo_url: { type: String, trim: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Review", reviewSchema);
