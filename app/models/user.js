var mongoose = require('mongoose'),
    debug    = require('debug')('app:models'),
    Song     = require('./songs.js'),
    bcrypt   = require('bcrypt-nodejs');


//User Schema
var UserSchema = new mongoose.Schema({
  email:    {type: String, required: true},
  password: {type: String, required: true},
  songs: String,
});

// exclude password
UserSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.password;
    return ret;
  }
});

// hash the password before the user is saved
UserSchema.pre('save', function(next) {
  var user = this;

  // hash the password only if the password has been changed or user is new
  if (!user.isModified('password')) return next();

  // generate the hash
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) return next(err);

    // change the password to the hashed version
    user.password = hash;
    next();
  });
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function(password) {
  var user = this;

  return bcrypt.compareSync(password, user.password);
};


module.exports = mongoose.model('User', UserSchema);
