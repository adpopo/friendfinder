var fs = require("fs");

module.exports = function(app){
	//use for root path
    app.use("/", function(req, res){
    	var file;
    	fs.readFile("./home.html", function(err, readFile){
    		file = readFile;
    	});
        res.send(file);
    });

    //get for survey path
    app.get("/survey", function(req, res){
    	var file;
    	fs.readFile("./survey.html", function(err, readFile){
    		file = readFile;
    	});
        res.send(file);
    });
}