const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    images: {
      type: String,
    },
    fullName: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
    },
    age: {
      type: String,
    },
    city: {
      type: String,
    },
    contact: {
      email: {
        type: String,
        unique: true,
      },
      phone: {
        type: String,
        unique: true,
      },
    },
    createAt: {
      type: Date,
    },
    updateAt: {
      type: Date,
    },
    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    createAt: {
      type: Date,
      default: Date.now(),
    },
    updateAt: {
      type: Date,
    },
  },

  { versionKey: false }
);
module.exports = mongoose.model("User", userSchema);
