var express = require("express");
var bodyParser = require("body-parser");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();
var port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
apiRoutes(app);
htmlRoutes(app);

app.listen(process.env.PORT || port);