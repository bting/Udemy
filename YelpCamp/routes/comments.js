var express = require("express");
var router = express.Router({mergeParams: true});
var Comment = require("../models/comment");
var Campground = require("../models/campground");

//new - show form to create new comment
router.get("/new", isLoggedIn, function(req, res) {
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

// create -create a new comment of campground to DB
router.post("/", isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err);
        } else {
            // create new comment
            Comment.create(req.body.comment, function(err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    // connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    // redirect campground show page
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
});

// middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;