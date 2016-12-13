var _ = require('lodash');
require('dotenv').load()

var localEnvVars = {
  TITLE:      'test',
  SAFE_TITLE: 'test',
  superSecret: "42SPffV17}2*N7L"
};


// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
