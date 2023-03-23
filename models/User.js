const mongoose = require("mongoose");

const User = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  télephone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", User);
