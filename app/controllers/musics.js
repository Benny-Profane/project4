var env         = require('../config/environment'),
    superSecret = env.superSecret,
    request     = require('request');

function getRandomTrack(req, res, next) {
  request("https://api.spotify.com/v1/search/?q=y%20genre:%22sludge%20metal%22&type=track&limit=1", function(err, response, body) {
    if(!err && response.statusCode == 200) {
      var info = JSON.parse(body);
      res.json(info);
    } else {
      res.json(err);
    }
  })
}

//


//||||||||||||||||||||||||||--
// EXPORT MODULE
//||||||||||||||||||||||||||--
module.exports = {
  getRandomTrack: getRandomTrack
};
