var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");

//Index - show all campgrounds
router.get("/", function(req, res) {
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});

//create - add new campground to DB
router.post("/", function(req, res){
    // get data from form and add to DB
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // create a new campground and save to db
    Campground.create(newCampground, function(err, newCampground){
        if(err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

// new - show form to create new campground
router.get("/new", function(req, res){
    res.render("campgrounds/new");
});

// show -shows more info about one campground
router.get("/:id",function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp){
        if(err) {
            console.log(err);
        } else {
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCamp});
        }
    });
});

module.exports = router;