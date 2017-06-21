var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
module.exports = function(app) {
  app.get('/', function(req, res, next){
    res.send('hello world')
  })
  app.post('/name', function(req, res, next){
    users.create(req, res)
  })
  app.post('/topic', function(req, res, next){
    topics.create(req, res)
  })
  app.get('/topics/show', function(req, res, next){
    topics.find(req, res)
  })
  // app.post('/new', function(req, res, next) {
  //   notes.create(req, res)
  // })
}