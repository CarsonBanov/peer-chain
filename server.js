var express = require('express');
var pug = require('pug');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

app.set('view engine', 'pug');

count = 1
prevCount = null

app.get('/', function (req, res) {
  res.render('home', {
    count: count,
    prevCount: prevCount
  });
  count ++;
  if (prevCount == null) {
    prevCount = 1;
  } else {
    prevCount ++;
  }
});

var server = app.listen(9000);

var options = {
  debug: true
};

app.use('/api', ExpressPeerServer(server, options));
