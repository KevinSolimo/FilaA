var express = require('express');
var app = express();

var countries = require(__dirname + '/function/queryMongoDB.js');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    // restituisco tutte le infomrazioni sulle nazioni con countries.all()
    countries.all(function(docs){
        res.render('es4', {message: 'impariamo la geografia', title:'fila A', list: docs});
    }); 
});

app.get('/info', function (req, res) {
  var nazione = req.query.nazione;
  var info = req.query.info;
  if (info == 'capitale' ) {
      countries.info(nazione, function(docs){
        res.render('es3', {message: docs.capital, title:'capitale'});
      });
  }
  else
  {
      countries.info(nazione, function(docs){
        res.render('es3', {message: docs.population, title:'capitale'});
      });
      
  }
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
