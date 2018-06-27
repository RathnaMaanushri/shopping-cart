var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rst');
var UserSchema = new mongoose.Schema({
  
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});
var User = mongoose.model('User', UserSchema,'User');
module.exports = User;