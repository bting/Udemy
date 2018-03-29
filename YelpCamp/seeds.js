var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    },
    {
        name: "Desert Mesa", 
        image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        // if(err) {
        //     console.log(err);
        // } else {
        //     data.forEach(function(seed) {
        //         Campground.create(seed, function(err, campground){
        //             if(err){
        //                 console.log(err);
        //             } else {
        //                 console.log("added a campground");
        //                 Comment.create({
        //                     text: "This place is great.",
        //                     author: "Jomer"
        //                 }, function(err, comment) {
        //                     if(err) {
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Create new comment");
        //                     }
        //                 });
        //             }
        //         });
        //     });
        // }
    });
}

module.exports = seedDB;