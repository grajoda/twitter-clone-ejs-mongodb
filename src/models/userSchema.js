const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    profilePicture: {
        type: Buffer,
        contentType: String
    }, 
    bio_text: String,
    // embededs 
    posts: [mongoose.Schema.Types.ObjectId],
    invites: [mongoose.Schema.Types.ObjectId],
    notifications: [mongoose.Schema.Types.ObjectId],
    followers: [mongoose.Schema.Types.ObjectId],
    following: [mongoose.Schema.Types.ObjectId],
    feeds: [mongoose.Schema.Types.ObjectId],
    chats: [mongoose.Types.ObjectId],
});

//userSchema.plugin(encrypt, { secret: process.env.MONGOOSE_ENCRYPTION_KEY, encryptedFields: ["password"]});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = User