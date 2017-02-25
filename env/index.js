var path = require('path');
require('dotenv').config();
var env = process.env.NODE_ENV || 'development';
var config = require(`./${env}`); // eslint-disable-line import/no-dynamic-require

var defaults = {
  root: path.join(__dirname, '/..')
};

// export default Object.assign(defaults, config);
module.exports = Object.assign(defaults, config);

