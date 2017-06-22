var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'title required'], minlength: 5 },
  text: { type: String, required: [true, 'text required'], minlength: 5 },
  category: { type: String, required: [true, 'category required'] },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  count: { type: Number, default: 0 }
}, { timestamps: true });
var Topic = mongoose.model('Topic', TopicSchema);