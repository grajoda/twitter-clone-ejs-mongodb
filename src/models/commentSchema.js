const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: String,
    date: Date,
    text: String,
    likes: Number
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment