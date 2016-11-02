var middleware =  {
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

module.exports = middleware;
