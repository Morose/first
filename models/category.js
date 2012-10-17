var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Category = new Schema ({
  name: {type:String, require:true, trim:true, index:{ unique:true }} // Название
})

module.exports = mongoose.model('Category', Category);