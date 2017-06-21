var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'name required'], minlength: 2 },
  tCount: { type: Number, default: 0 },
  pCount: { type: Number, default: 0 },
  cCount: { type: Number, default: 0 },
}, { timestamps: true });
var User = mongoose.model('User', UserSchema);