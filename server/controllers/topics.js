var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

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
    })
  }
//   find: function (req, res) {
//     User.find(function(err, data){
//       if(err) { console.log(err); }
//       else { res.json(data); }
//     })
//   },
//   create: function (req, res) {
//     User.find(req.body, function (err, data){
//       if(err) { console.log(err) }
//       if(data.length) { res.json(data[0]); }
//       else {
//         User.create(req.body, function (err, data){
//           if(err) { console.log(err); }
//           if(data) {res.json(data); }
//         })
//       }
//     })
//   },
}