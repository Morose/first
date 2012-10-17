var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Vacancy = new Schema({
  //_owner : {type: Schema.Types.ObjectId, ref: 'User'},
  slug : {
    type: String,
    require:true,
    lowercase: true,
    trim: true,
    unique : true }, // короткое имя в пути
  title: {
    type:String,
    require:true,
    trim:true,
    unique:true
  } // Название
  /*vacancyInfo : {
    type: {type: String, enum: ['fulltime', 'contract','freelance'], require:true}, // Тип занятости
    location: {type:String, require:true, trim:true}, // Страна, город
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    mainRequirements: {type:String, require:true, trim:true}, // Основные требования
    bonuses: String, // Бонусы
    webAddress: {type:String, require:true, trim:true, lowercase: true}, // Эл. почта или сайт для связи
    instruction: {type:String, require:true} // Инструкции
  },
  companyInfo : {
    name: {type:String, require:true, trim:true}, // Название компании
    description : {type: String, require: true}, // Описание компании
    site: {type:String, require:true, trim:true, lowercase: true}, // Сайт компании
    // Сайт компании (не стал добавлять)
    logo: {type:String, require:true, trim:true}, // Логотип компании
    icon: {type:String, trim:true}, // Иконка вакансии
    author: {type:String, trim:true} // Имя автора вакансии
  },*/
  //dateCreated: {type:Date, default: Date.now},
  //updated: {type:Date, default: Date.now}
});

module.exports = mongoose.model('Vacancy', Vacancy);