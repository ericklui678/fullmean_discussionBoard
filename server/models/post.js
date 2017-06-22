var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
  text: { type: String, required: [true, 'post required'], minlength: 5 },
  vote: { type: Number, default: 0 },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  _topic: { type: Schema.Types.ObjectId, ref: 'Topic' },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
})
var Post = mongoose.model('Post', PostSchema);