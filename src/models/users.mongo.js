const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  age:{
    type: String,
    required: true,
  },
  mobileNumber:{
    type: String,
    required: true,
  },
});

// Connects userSchema with the "Users" collection
module.exports = mongoose.model('Users', userSchema);
