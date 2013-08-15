var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var html = fs.readFileSync('index.html').toString();
	response.send(html);
});
app.get('/social-buttons.css', function(request, response) {
	var css = fs.readFileSync('social-buttons.css').toString();
	response.setHeader("Content-Type", "text/css");
	response.send(css);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});