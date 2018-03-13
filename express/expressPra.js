var express = require("express");
var app = express();
var animals = {
    pig: "oink",
    cow: "Moo",
    dog: "Woof Woof"
};

app.get('/', function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get('/speak/:animal', function(req, res) {
    var ani = req.params.animal;
    res.send("The " + ani + " says '" + animals[ani] +"'");
});

app.get('/repeat/:word/:times', function(req, res) {
    var count = Number(req.params.times);
    var words = req.params.word;
    var result = "";
    for (var i = 0; i < count; i++) {
        result += words + " ";
    }
    res.send(result);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(process.env.PORT, function() {
    console.log("APP is running!");
});
