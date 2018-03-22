var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo2");

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
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});

var User = mongoose.model("User", userSchema);
// Post.create({
//     title: "How to cook the best burger p2",
//     content: "vanbandea"
// }, function(err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//             if(err){
//                 console.log(err);
//             } else {
//              foundUser.posts.push(post); 
//              foundUser.save(function(err, data){
//                  if(err) {
//                      console.log(err);
//                  } else {
//                      console.log(data);
//                  }
//              });
//             }
//         }); 
//     }
// });

// Find user
// find all posts for that user
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});
// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });
