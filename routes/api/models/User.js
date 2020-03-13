const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ture
  },
  email: {
    type: String,
    required: true,
    //email to be unique
    unique: ture
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },

  date: {
    type: Date,
    defualt: Date.now
  }
});

module.exports = User = mongoose.model("user", UserSchema);
