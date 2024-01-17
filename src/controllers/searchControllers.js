const User = require('../models/userSchema');


const renderSeacrhPage =  async (req, res) => {
    const searchText = req.params.searchText;

    try {
        const foundUsers = await User.find({username: searchText});
        // const foundPosts

        res.render('pages/search', {
            user: req.user,
            foundUsers : foundUsers
        });

    } catch (err) {
        console.log(err);
        res.redirect('back');
    }
}



const redirectToSearch = (req, res) => {
    const searchText = req.body.search;
    res.redirect('/search/'+ searchText);
}

module.exports = {
    renderSeacrhPage,
    redirectToSearch
}