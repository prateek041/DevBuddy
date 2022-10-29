const mongoose = require("mongoose");

const DevProfileSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided"],
  },
  username: {
    type: String,
    required: [true, "Developer must have a username"],
    maxlength: [20, "Username cannot be more than 20 letters"],
    unique: true,
  },
  bio: {
    type: String,
    required: [true, "Introduce yourself !"],
    trim: true,
    maxlength: [50, "Bio cannot be more than 50 characters"],
  },
  email: {
    type: String,
    unique: true,
  },
  country: {
    type: String,
    required: [true, "Developer must mention their country"],
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  isCollegeStudent: {
    type: Boolean,
    default: false,
  },
  college: {
    // This is filled only when isCollegeStudent is true.
    type: String,
  },
  techStack: {
    // This is optional, but eventually going to have an array.
    type: [String],
  },
  socials: {
    // must have atleast one social media link.
    type: [String],
  },
});

module.exports = mongoose.model("DevProfileSchema", DevProfileSchema);
