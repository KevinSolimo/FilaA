var express = require('express');
var app = express();

var countries = require(__dirname + '/function/queryMongoDB.js');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('es2', {message: 'impariamo la geografia', title:'fila A'});
});

app.get('/info', function (req, res) {
  // prelevo la nazione che ha inserito l'utente
  var nazione = req.query.nazione;
  // prelevo la scelta che ha selezionato l'utente tramite i radiobutton: capitale o popolazione
  // notare che si usa sempre req.query    
  // info è il nome dei radiobutton
  var info = req.query.info;
  if (info == 'capitale' ) {
      // resetituisco, tra le altre cose, anche la capitale
      // countries.info(nazione, 'name') contiene tutte le info su quella nazione
      // .capital serve per prendere solo la capitale tra tute le informazioni
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

