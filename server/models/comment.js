var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  text: { type: String, required: [true, 'text required'], minlength: 5 },
  _post: { type: Schema.Types.ObjectId, ref: 'Post'},
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
var Comment = mongoose.model('Comment', CommentSchema);