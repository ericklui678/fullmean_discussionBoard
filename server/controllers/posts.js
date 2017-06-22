var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = {
  create: function (req, res){
    Post.create(req.body, function (err, data){
      if(err) { console.log(err); }
      if(data) { res.json(data); }
    })
  }
}