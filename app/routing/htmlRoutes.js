var path = require("path");

// Given a certain file path, we will navigate amongst the html pages.
module.exports = function(app) {  
    app.get("/home", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };