var express = require('express');
var app = express();

// il primo argomento è / -> è la root del server 
// il secondo argomento è una funzione anonima a cui viene passato request e response
// .get è il metodo http di richiesta a cui lui deve rispondere
app.get('/', function(req,res){
	res.send('Hello Express!');
});


app.get('/about', function(req,res) {
	res.send('About Us');
});


//Creo una cartella chiamata public e al suo interno ci piazzo un file html chiamato index.html
//Ora voglio esporre l'intera cartella public al nostro server web
app.use(express.static(__dirname + '/public'));

//Ci posso poi accedere con
//http://localhost:3000/index.html

//Questo mi mostra la directory in cui sto lavorando
//console.log(__dirname);

//Si mette in ascolto sulla porta 3000
app.listen(3000);


