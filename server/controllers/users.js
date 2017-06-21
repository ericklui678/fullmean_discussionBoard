var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  find: function (req, res) {
    User.find(function(err, data){
      if(err) { console.log(err); }
      else { res.json(data); }
    })
  },
  create: function (req, res) {
    User.find(req.body, function (err, data){
      if(err) { console.log(err) }
      if(data.length) { res.json(data[0]); }
      else {
        User.create(req.body, function (err, data){
          if(err) { console.log(err); }
          if(data) {res.json(data); }
        })
      }
    })
  },
  incrTopic: function (req, res) {
    // console.log(req.body._user);
    User.findOneAndUpdate({_id: req.body._user}, {$inc: {tCount: 1}}, function (err, data) {
      if(err) { console.log(err); }
      if(data) { console.log('incremented'); }
    })
  }
}