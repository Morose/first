var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create User model
var User = new Schema({
  email: { type: String, required: true, index: { unique: true, sparse: true }},
  password: String,
  alive: Boolean,
  dateCreated: {type:Date, default: Date.now},
  updated: {type:Date, default: Date.now},
  // вакансии
  vacancies : [{ type: Schema.Types.ObjectId, ref: 'Vacancy' }]
});

module.exports = mongoose.model('User', User);