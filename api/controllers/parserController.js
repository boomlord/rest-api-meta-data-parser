
// var request = require('request');
exports.parse_home = function (req, res) {
	res.send("Meta Data Parser RestAPI");
};

exports.parse_landingurl = function(req, res) {
	var request = require('request');
	var og = require('open-graph');
	// console.log(req.params.landingUrl);
  	request({ url: req.params.landingUrl, followRedirect: true }, function (err, resp, body) {
		// console.log(resp);
		var landingUrl = resp.request.uri.href;
		// console.log(landingUrl);
	  	if (landingUrl) {
	  		
	  		og(landingUrl, function(err, meta){
				if (meta) {
					console.log(meta);
					res.json(meta)
				}
				if (err) {
					console.log(err);
					res.send(err);
				}
			})
	  	} else {
	  		
	  	}
  	
	});
};