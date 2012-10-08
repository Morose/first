var mongoose = require('mongoose');

var Schema = mongoose.Schema
  ,ObjectId = Schema.ObjectId;

// create User model
var User = new Schema({
  username: {type:String,require: true, trim: true, unique: true},
  password: String,
  dateCreated: Date,
  lastUpdated: Date,
  profile: {
    firstName: String,
    lastName: String
  }
});

module.exports = mongoose.model('User', User);