var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var mydata = "";

var mydata = fs.readFileSync('index.html');

console.log(mydata.toString());

app.get('/', function(request, response) {
  response.send(mydata);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
