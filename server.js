var express = require("express");
var body_parser = require("body-parser");

// Use express
var app = express();
var PORT = process.env.PORT || 9001;

// Provide data parsing
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

// Provide an app parameter for specific routes that the user navigates through.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server
app.listen(PORT, function() {
  console.log("Working on PORT: " + PORT);
});
