var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

// define a pattern for data, need particular structure to handle data
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// "Cat" ==> DB will make a collection name cats 
var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
    name: "Norris",
    age: 11,
    temperament: "Grouchy"
});

// cat is the item return from database
// george is not from database, slightly different to cat
// george.save(function(err, cat) {
//     if(err) {
//         console.log("Something went wrong")
//     } else {
//         console.log("We just save a cat to the db:")
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
    
}, function(err, cat) {
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats) {
    if(err) {
        console.log("Error");
    } else {
        console.log(cats);
    }
});