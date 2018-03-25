var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Comment    = require("./models/comment"),
    Campground = require("./models/campground"),
    seedDB     = require("./seeds");

mongoose.connect("mongodb://localhost/yelp_camp"); 
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();

// var campgrounds = [
//         {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
//         {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
//         {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
//         {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
//         {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
//         {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
// ];

app.get("/", function(req, res) {
    res.render("landing");
});

//Index - show all campgrounds
app.get("/campgrounds", function(req, res) {
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
app.post("/campgrounds", function(req, res){
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
app.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new");
});

// show -shows more info about one campground
app.get("/campgrounds/:id",function(req, res) {
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
//====================
// Comment routes
//====================
//new - show form to create new comment
app.get("/campgrounds/:id/comments/new", function(req, res) {
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

// create -create a new comment of campground to DB
app.post("/campgrounds/:id/comments", function(req, res){
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

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started!!");
});