const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname:String,
  email: 
  {type:String,
    unique:true
   },
   age:String
});

module.exports = mongoose.model("users", userSchema);
