var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');
var app = express();
var url = require('url');
const PORT = 8080;

  app.use(express.static(path.join(__dirname, '/styles')));
  app.use(express.static(path.join(__dirname, '/pages')));
  app.use(express.static(path.join(__dirname, '/images')));
  console.log(path.join(__dirname, '/styles'));
  
  console.log(path.join(__dirname, '/'));

var home = path.join(__dirname, '/pages/home.html');
  
console.log(home);

app.get('/' , function( req , res ){
  
  //var q = url.parse(req, true);
  //
  //if (q.pathname == '/' || q.pathname == '/home.html') {
    res.sendFile(path.join(__dirname,'/pages/home.html'));
  //} else if (q.pathname == 'mixtape.html') {
  //  res.sendFile(path.join(__dirname, '/pages/mixtape.html'));
  //} else if (q.pathname == 'logic.html') {
  //  res.sendFile(path.join(__dirname, '/pages/logic.html'));
  //} else if (q.pathname == 'about.html') {
  //  res.sendFile(path.join(__dirname, '/pages/about.html'));
  //}
  console.log('received request on port 8080');
  
});
app.listen(PORT);



