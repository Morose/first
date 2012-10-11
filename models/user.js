var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create User model
var User = new Schema({
  username: {type:String, require: true, trim: true, unique: true},
  password: String,
  dateCreated: {type:Date, default: Date.now},
  updated: {type:Date, default: Date.now},
  profile: {
    firstName: String,
    lastName: String
  }
});

module.exports = mongoose.model('User', User);