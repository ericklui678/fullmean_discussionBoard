var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');

module.exports = {
  create: function (req, res) {
    console.log('inside create');
    Topic.create(req.body, function (err, data){
      if(err) { console.log(err); }
      if(data) { res.json(data); }
    })
  },
  find: function (req, res){
    Topic.find(function(err, data){
      if(err) { console.log(err); }
      if(data) { res.json(data); }
    }).sort({'createdAt': -1})
  },
  findOne: function (req, res){
    Topic.find({_id: req.params.id}, function (err, data){
      if(err) { console.log(err) }
      if(data) { res.json(data); }
    })
  },
  addPost: function (req, res){
    Topic.findOne({_id: req.body._topic}, function(err, topic){
      var post = new Post(req.body);
      post._topic = req.body._topic;
      topic.posts.push(post);
      post.save(function(err){
        topic.save(function(err){
          if(err) { console.log(err) }
          else { console.log('successfully pushed'); }
        })
      })
    })
  },
  showAll: function(req, res){
    Topic.findOne({_id: req.params.id})
    .populate('posts')
    .exec(function (err, data) {
      res.json(data);
    })
  }
}