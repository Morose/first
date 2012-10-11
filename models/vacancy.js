var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Vacancy = new Schema({
  vacancyInfo : {
    name: {type:String, require:true, trim:true}, // Название
    type: {type: String, enum: ['fulltime', 'contract','freelance'], require:true}, // Тип занятости
    location: {type:String, require:true, trim:true}, // Страна, город
    // категория: Разное, Дизайн и юзабилити, Фронтенд, Бэкенд, Приложения, Управление и менеджмент, Контент, Администрирование, Тестирование
    mainRequirements: {type:String, require:true, trim:true}, // Основные требования
    bonuses: String, // Бонусы
    webAddress: String, // Эл. почта или сайт для связи
    instruction: String // Инструкции
  },
  companyInfo : {
    name: {type: String, require:true}, // Название компании
    description : {type: String, require: true}, // Описание компании
    site: String, // Сайт компании
    // Сайт компании (не стал добавлять)
    logo: String, // Логотип компании
    icon: String, // Иконка вакансии
    author: String // Имя автора вакансии
  },
  dateCreated: {type:Date, default: Date.now},
  updated: {type:Date, default: Date.now}
});

module.exports = mongoose.model('Vacancy', Vacancy);