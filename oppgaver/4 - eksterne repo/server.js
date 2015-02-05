var express = require('express')
var app = express()
var awesomeCMS = require('awesome-cms');

app.get('/', function (req, res) {
  res.send(awesomeCMS.getPage('riktig.html'));
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)

});
