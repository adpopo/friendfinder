var fs = require("fs");

module.exports = function(app){

	//get for survey path
    app.get("/survey", function(req, res){
    	var file = "";
    	fs.readFile("./app/public/survey.html", function(err, readFile){
    		file += readFile;
    		res.send(file);
    	});
    });
	//use for root path
    app.use("/", function(req, res){
    	var file = "";
    	fs.readFile("./app/public/home.html", function(err, readFile){
    		file += readFile;
    		res.send(file);
    	});
    });
}