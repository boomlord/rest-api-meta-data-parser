var og = require('open-graph');

var url = "http://google.com";

og(url, function(err, meta){
	if (meta) {
		console.log(meta);
	}
	if (err) {
		console.log(err);
	}
	
})