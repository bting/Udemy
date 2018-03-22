var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// post- title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// user -email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    // associate user and post together
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "hermione granger"
// });

// newUser.posts.push({
//     title:"How to bre..",
//     content: "Just Kidding."
// })

// newUser.save(function(err, user){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "reflection on apples",
//     content: "apples are delicious"
// });

// newPost.save(function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "hermione granger"}, function(err, user) {
    if(err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "Three things I really hate",
            content: "Voldemort. Voldemort. Voldemort."
        });
        // save to DB
        user.save(function(err, user){
            if(err) {
                console.log(err)
            } else {
                console.log(user);
            }
        });
    }
});