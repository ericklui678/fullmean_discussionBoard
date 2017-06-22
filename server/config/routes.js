var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
var posts = require('../controllers/posts.js');
var path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res, next){
    res.send('hello world')
  })
  app.post('/name', function(req, res, next){
    users.create(req, res)
  })
  app.post('/topic', function(req, res, next){
    topics.create(req, res)
    users.incrTopic(req, res)
  })
  app.get('/topics/show', function(req, res, next){
    topics.find(req, res)
  })
  app.get('/topic/:id', function(req, res, next){
    topics.findOne(req, res)
  })
  app.post('/post', function(req, res, next){
    posts.create(req, res)
    topics.addPost(req, res)
  })
  app.get('/topicAll/:id', function(req, res, next){
    topics.showAll(req, res)
  })
  app.get('*', function(req, res){
    res.sendFile(path.resolve('public/dist/index.html'));
  })
  // app.post('/new', function(req, res, next) {
  //   notes.create(req, res)
  // })
}