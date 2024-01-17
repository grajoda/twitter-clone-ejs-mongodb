const Post = require('../models/socialPostSchema');

const renderHomePage = async (req, res) => {
    try {

        let followingId = req.user.following.map(following => following._id.toString());
        followingId.push(req.user._id.toString());

        const homeFeedPosts = await Post.find({author_id: { $in: followingId }});

        res.render('pages/home', {
            user: req.user,
            posts: homeFeedPosts
        });
    } catch (err) {
        console.log(err);
        res.redirect('back');
    }

}

module.exports = {
    renderHomePage
}