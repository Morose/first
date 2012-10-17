process.env.NODE_ENV = 'test';

var app = require('./../app.js'),
  request = require('supertest'),
  should = require('should'),
  mongoose = require('mongoose');

// Tests
describe('GET /', function(){
  it('should respond OK', function(done){
    request(app)
      .get('/')
      .expect(200, done);
  })
});
describe('Vacancy controller', function(){
  describe('POST /vacancies.json', function(){
    it('should create a new vacancy and respond json', function(done){
      request(app)
        .post('/vacancies.json')
        .send({
          title : 'Web-developer',
          slug : 'web-developer'
        })
        .set('Accept','application/json')
        .expect(200)
        .end(function(err, res){
          if(err) return done(err);
          done();
        });
    });
  });
  describe('DELETE /vacancies/web-developer', function(){
    it('should be delete vacancy and respond json', function(done){
      request(app)
        .del('/vacancies/web-developer')
        .expect(302)
        .end(function(err, res){
          if(err) return done(err);
          done();
        });
    });
  });
});