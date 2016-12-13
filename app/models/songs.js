var mongoose = require('mongoose'),
    debug    = require('debug')('app:models'),
    User    = require('./user.js');


//Song Schema
var songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  dateAdded: String,
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
        }
});

var Song = mongoose.model('Song', songSchema);

module.exports = Song;
