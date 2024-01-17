const fs = require('fs');

const User = require ('../models/userSchema');
const Post = require ('../models/socialPostSchema');
// const multer = require('multer');

const consoleLogError = require('../utils/consoleLogError');


const followUser = async (req, res) => {
    try {
        const userId = req.params.id;

        await User.findOneAndUpdate({_id: userId.toString()}, {$push: {followers: req.user._id}});
        await User.findOneAndUpdate({_id: req.user._id.toString()}, {$push: {following: userId}});
        
        console.log('Usuário adicionado');
        res.redirect('back');

    } catch (err) {
        consoleLogError(err)
        res.redirect('back');
    }
    
}



const renderUserUpdatePage = async (req, res) => {

    try {
        const userId = req.params.id;   
        const pageUser = await User.findOne({_id: userId});
        const userPosts = await Post.find({author_id: userId});
        
        res.render('pages/userUpdatePage', {
            user: req.user,
            posts: userPosts,
            pageUser: pageUser
        });

    } catch (err) {
        consoleLogError(err)
        res.redirect('back');
    }
    
}



const updateUser = async (req, res) => {

    try {
        const userId = req.params.id;
        let newUsername = req.body.newUsername;
        let newBio = req.body.newBio;
        const newProfilePicture = fs.readFileSync(req.file.path);
        let contentTypeProfilePicture = req.file.mimetype;

        if (newUsername == '' || newUsername == undefined || !newUsername || newUsername == null) {
            newUsername = req.user.username;
        }

        if (newBio == '' || newBio == undefined || !newBio || newBio == null) {
            newBio = req.user.bio_text;
        }

        if (newProfilePicture == '' || newProfilePicture == undefined || !newProfilePicture || newProfilePicture == null) {
            newProfilePicture = req.user.profilePicture;
        }

        let stringUserID = userId.toString(16).padStart(24, '0');
        
        await User.findOneAndUpdate(
            {_id: stringUserID}, 
            {$set: {
                username: newUsername,
                bio_text: newBio,
                profilePicture: newProfilePicture,
                contentType: contentTypeProfilePicture,
                }
            }
            );
        
        console.log('\n\n Usuário atualizado \n\n');
        res.redirect('/user/'+req.user._id);

    } catch (err) {
        consoleLogError(err)
        res.redirect('back');
    }
    
}



const getUserImg = async(req, res) => {
    try {

        const user = await User.findOne({ _id: req.params.id });
        res.set('Content-Type', user.contentType);
        res.send(user.profilePicture);
        if (!user) return res.status(404).send('Usuário não encontrado');

    } catch(err) {
        consoleLogError(err)
        return res.status(500).send(err);
    }
}



const renderUserPage = async (req, res) => {

    try {
        const userId = req.params.id.toString(12);   
        
        const pageUser = await User.findOne({_id: userId});
        const userPosts = await Post.find({author_id: userId});
        
        res.render('pages/user', {
            user: req.user,
            posts: userPosts,
            pageUser: pageUser
        });

    } catch (err) {
        consoleLogError(err)
        res.redirect('back');
    }
    
}







module.exports = {
    followUser,
    updateUser,
    renderUserUpdatePage,
    getUserImg,
    renderUserPage
}