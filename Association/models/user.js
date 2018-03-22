var mongoose = require("mongoose");
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

module.exports = (mongoose.model("User", userSchema));