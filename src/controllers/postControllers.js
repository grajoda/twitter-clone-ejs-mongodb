const Post = require('../models/socialPostSchema');

const createNewPost = async (req, res) => {
    try {
        const authorId = req.user._id;
        const author_username = req.user.username;
        const date = 'getDate';
        const post_text = req.body.postText
        const post_type = req.params.type;
    
        const newPost = new Post({
            author_id: authorId,
            author_username: author_username,
            date: date,
            text: post_text,
            type: post_type
        });
    
        // if (post_type == 'image') {
        //     newPost
        // }

        await newPost.save();

        res.redireect('back');
        
    } catch (err) {
        console.log(err);
        res.redirect('back');
    }
}


const likePost = async (req, res) => {
    try {
        
        const postId = req.params.postId;

        const foundPost = await Post.findOne({_id: postId});

        if (foundPost.likedBy.includes(req.user._id)) {
            await Post.findOneAndUpdate(
                {_id: postId}, 
                {
                    $set: {likes: foundPost.likes-1 },
                    $pull: {likedBy: req.user._id}
                }
            );
        } else {
            await Post.findOneAndUpdate(
                {_id: postId}, 
                {
                    $set: {likes: foundPost.likes+1 },
                    $push: {likedBy: req.user._id}
                }
            );
    
        }
        
        res.redirect('back');

    } catch (err) {
        console.log(err);
        res.redirect('back');
    }
}

 
const renderNewPostPage = (req, res) => {
    res.render('pages/newPostPage', {
        user: req.user
    });
}

module.exports = {
    createNewPost,
    likePost,
    renderNewPostPage
};