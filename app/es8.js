var express = require('express');
var app = express();

var countries = require(__dirname + '/function/queryMongoDB.js');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    countries.all(function(docs){
        res.render('es6', {message: 'impariamo la geografia', title:'fila A', list: docs});
    }); 
});

app.get('/capital/:nazione', function (req, res) {
    var nazione = req.params.nazione;
    countries.capital(nazione, function(docs){
        res.render('es7', {message: 'impariamo la geografia', title:'fila A', capitale: docs});
    });
  
});

app.get('/states/:nazione', function (req, res) {
    var nazione = req.params.nazione;
    countries.states(nazione, function(docs){
        //res.send(docs);
        res.render('es8', {message: 'impariamo la geografia', title:'fila A', stati: docs });
    });
});
  /*
app.get('/info', function (req, res) {
  var nazione = req.query.nazione;
  var info = req.query.info;
  if (info == 'capitale' ) {
      res.render('es3', {message: countries.info(nazione, 'name').capital, title:'capitale'});
  }
  else
  {
      res.render('es3', {message: countries.info(nazione, 'name').population, title:'capitale'});
  }
  
});*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


