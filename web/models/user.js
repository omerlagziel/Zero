var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  phone_number: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },
  creation_date: { type: Date, default: new Date() },
  banned: { type: Boolean, default: false },
  sms_limit: { type: Number, default: 20 }
});

var User = mongoose.model('users', UserSchema);

module.exports = User;
