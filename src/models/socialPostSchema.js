const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author_username: String,
    author_id: mongoose.Schema.Types.ObjectId, 
    date: String,
    type: String, //reel, foto, vídeo.
    text: String,
    image: {
        type: Buffer,
        contentType: String
    },
    likes: { 
        type: Number, 
        default: 0 
    },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId}],
    reposts: Number,
    comments: [mongoose.Schema.Types.ObjectId],

    shared_post_id: mongoose.Schema.Types.ObjectId,
    shared_post_author_id: mongoose.Schema.Types.ObjectId,
    // shared_post_author_username: String,
    // shared_post_text: String,
    // shared_post_date: String,
    // shared_post_type: String
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post