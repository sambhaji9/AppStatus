// load the express module
var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/wielder.html", function(request, response) {
    response.send(__dirname + "/wielder.html");
});

app.get("/list_users", function(request, response) {
    response.send(data);
});

var server = app.listen(3031, function() {
    console.log("Server listening at 127.0.0.1:3031");
});

var data = [{
    "name": "COPD pocket",
    "deadline": "15-Jan-2018",
    "status": "On-time",
    "section": "Ongoing"
}];