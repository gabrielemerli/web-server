var express = require('express');
var app = express();
//Se metti il nome in maiuscolo implica che la variabile non si deve modificare (final dai)
var PORT = 3000;


//Parliamo ora di autenticazioen fatta sulla singola rotta (ovver sulla singola directory, non per tutto il server)
var middleware = {
	//Next -> Cosa fare dopo l'autentica, generalmente, caricare la pagina
	requireAuthentication: function(req,res,next) {
		console.log('Private route hit!');
		next();
	},

	logger: function(req,res,next) {

		var data = new Date().toString();
		console.log('Request: '+ req.method + " "+req.originalUrl+" in data: "+data);

		//console.log(req);
		next();
	}
};

//Sta cosa va definita prima delle altre, altrimenti non si autentica (va in ordine)
//Se lo metti così applica il middleware per tutte le pagine richieste e tutte le rotte.
//Si  chiama APPLICATION MIDDLEWARE
app.use(middleware.logger);

//Qui invece mettiamo una ROUTE MIDDLEWARE
app.get('/about', middleware.requireAuthentication, function(req,res) {
	res.send('About Us');
});

//Creo una cartella chiamata public e al suo interno ci piazzo un file html chiamato index.html
//Ora voglio esporre l'intera cartella public al nostro server web
app.use(express.static(__dirname + '/public'));
//Il file index.html è l'indice e ci puoi accedere anche così http://localhost:3000/, diciamo che
//questo comando trasforma /public nella root del nostro server, il cui indice è index.html

//Una volta partito il server esegue la funzione (di callback)
app.listen(PORT, function() {
	console.log('Express server started on port '+PORT);
});


