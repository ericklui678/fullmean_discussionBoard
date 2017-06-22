var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {
  create: function (req, res){
    Post.findOne({_id: req.body._post}, function(err, post){
      var comment = new Comment(req.body);
      post.comments.push(comment);
      comment.save(function(err){
        post.save(function(err){
          if(err) { console.log(err); }
          else { res.json(post); }
        })
      })
    })
  },
}