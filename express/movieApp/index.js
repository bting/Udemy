var express = require("express");
var request = require("request");
var app = express();

app.get("/results", function(req, res) {
    request("http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb", function(err, response, body) {
        if(!err && response.statusCode == 200) {
            var results = JSON.parse(body);
            res.send(results["Search"][0]["Title"]);
        }
    })
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app started!");
});
