const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Tabel
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    email: {
      type: String,
      required: "Email address is required",
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    roles: {
      type: String,
      default: "user",
      enum: ["admin", "user"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "user" }
);

//Export modules
module.exports = mongoose.model("User", userSchema);
