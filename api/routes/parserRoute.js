'use strict';
module.exports = function(app) {
  var parser = require('../controllers/parserController');

  app.route('/parser/:landingUrl')
    .get(parser.parse_landingurl);
};