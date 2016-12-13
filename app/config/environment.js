var _ = require('lodash');

var localEnvVars = {
  TITLE:      'test',
  SAFE_TITLE: 'test',
  superSecret: "42SPffV17}2*N7L"
};


// Spotify Web API
// Client ID : ce90801e73f24561b3dab64ea5489bdd
// Client Secret : 40cf96546724485ba5e999e4f265bd66

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
