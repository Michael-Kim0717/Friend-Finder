var friendsData = require("../data/friends");

// Given a certain method performed on the API files, return functionality.
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        res.json(true);
    });

    // For testing purposes
    app.post("/api/clear", function() {
        friendsData = [];
        console.log(friendsData);
    });
};
