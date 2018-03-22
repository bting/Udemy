var mongoose = require("mongoose");

// post- title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// return value of a file, that's what we send out
module.exports = mongoose.model("Post", postSchema);