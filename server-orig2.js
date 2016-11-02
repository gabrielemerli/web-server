var express = require('express');
var app = express();
//Se metti il nome in maiuscolo implica che la variabile non si deve modificare (final dai)
var PORT = 3000;



app.get('/about', function(req,res) {
	res.send('About Us');
});

//Creo una cartella chiamata public e al suo interno ci piazzo un file html chiamato index.html
//Ora voglio esporre l'intera cartella public al nostro server web
app.use(express.static(__dirname + '/public'));
//Il file index.html è l'indice e ci puoi accedere anche così http://localhost:3000/, diciamo che
//questo comando trasforma /public nella root del nostro server, il cui indice è index.html

//Una volta partito il server esegue la funzione (di callback)
app.listen(port, function() {
	console.log('Express server started on port '+PORT);
});


