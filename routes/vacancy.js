var Vacancy = require('./../models/vacancy.js');

exports.list = function (req, res) {
  'use strict';
  Vacancy.find({}, function (err, vacancies) {
    console.log(vacancies);
    switch (req.params.format) {
      case 'json':
        console.log(JSON.stringify(vacancies));
        res.send(vacancies);
        break;
    }
  });
};
exports.add = function (req, res) {
  'use strict';
  var vacancy = new Vacancy();
  vacancy.title = req.body.title;
  vacancy.slug = req.body.slug;
  console.log('vacancy.title = ' + vacancy.title);
  vacancy.save(function(err){
    if(err) {
      console.log(err);
      return;
    }
    switch (req.params.format){
      case 'json':
        console.log(JSON.stringify(vacancy));
        res.send(vacancy);
        break;
      default:
        res.redirect('/vacancies');
    }
  });
};
exports.update = function (req, res) {
  'use strict';

};
exports.get = function (req, res) {
  'use strict';

};
exports.delete = function (req, res) {
  'use strict';
  console.log('delete ' + req.params.id)
  var slug = req.params.id;
  Vacancy.remove({slug : slug}, function(err){
    if(err){ // ошибка
      consloe.log(err);
      res.send('There is no vacancy with slug of ' + slug);
    } else {
      console.log('deleted ' + slug);
      res.redirect('/vacancies');
    }
  })
};
