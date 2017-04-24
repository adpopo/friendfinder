var express = require("express");
var bodyParser = require("body-parser");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();
var port = 5000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

htmlRoutes(app);
apiRoutes(app);

app.listen(port, "0.0.0.0");