'use strict';
module.exports = function(app) {
  var parser = require('../controllers/parserController');

  app.route('/', function (req, res) {
  	res.send('Meta Data Parser RestAPI')
  })

  app.route('/parser/:landingUrl')
    .get(parser.parse_landingurl);
};