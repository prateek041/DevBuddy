const mongoose = require("mongoose");

const DevProfileSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Developer must have a username"],
  },
  about: {
    type: String,
    required: [true, "Iintroduce yourself !"],
  },
});

module.exports = mongoose.model("DevProfileSchema", DevProfileSchema);
