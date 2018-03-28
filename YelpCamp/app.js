var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    passport   = require("passport"),
    LocalStrategy = require("passport-local"),
    mongoose   = require("mongoose"),
    Comment    = require("./models/comment"),
    Campground = require("./models/campground"),
    User       = require("./models/user"),
    seedDB     = require("./seeds");

// require routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index");
    
mongoose.connect("mongodb://localhost/yelp_camp"); 
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

// passport configuration
app.use(require("express-session")({
    secret: "Claire",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser= req.user;
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started!!");
});