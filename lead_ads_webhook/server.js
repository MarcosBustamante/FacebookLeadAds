var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// URL Post para receber rências do lead
app.post("/leads", function (request, response) {
  console.log('POST', JSON.stringify(request.body));
  response.sendStatus(200);
});

// URL Get para validar a URL do WebServer
app.get("/leads", function (request, response) {
  console.log('GET', request.query);
  
  // Pegando o conteudo da query
  var data = request.query;
  
  // Validando o token
  if (data['hub.verify_token'] == '1234567890') {
    // Retornando o Challenge como resposta
    response.send(data['hub.challenge']);
  } else {
    // um 400 se o nao for valido ;).
    response.sendStatus(400);
  }
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
