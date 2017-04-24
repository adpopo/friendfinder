var friends = require("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        //get friendlist
        res.send(friends.list);
    });

    app.post("/api/friends", function(req, res){
        //post to friendlist
        res.json(friends.addTo(req));
    });
}