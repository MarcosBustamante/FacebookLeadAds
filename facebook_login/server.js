var express = require('express');
var app = express();

var https = require('https');
var bodyParser = require('body-parser');

app.use(bodyParser.text());
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/login", function (request, response) {
  console.log(request.body);
  
  var short_token = request.body;
  var app_id = "648288348652841";
  var app_secret = "6461df37c55f51e35d894df683b0a422";
  
  var params = "grant_type=fb_exchange_token"
    +"&client_id="+app_id
    +"&client_secret="+app_secret
    +"&fb_exchange_token="+short_token;
  var url = '/v2.6/oauth/access_token?'+params;
  
  https.get({
      host: 'graph.facebook.com',
      path: url
    }, function(response) {
      var body = '';
      response.on('data', function(d) {
        body += d;
      });
      response.on('end', function() {
        var parsed = JSON.parse(body);
        console.log(parsed);
      });
    }
  );
  
  response.sendStatus(200);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});