const passport = require('passport');

const User = require('../models/userSchema');


const renderLoginPage = (req, res) => {
    res.render('pages/loginPage'); 
}

 
const loginUser = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password 
    });

    //Lembrando que a função req.login é fornecida pelo passport
    req.login(user, (err) => {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate('local')(req, res, () => {
                console.log('\n----------- \nlogin feito \n-----------');
                res.redirect('/');
            });
        }
    });
}


const renderRegisterPage = (req, res) => {
    res.render('pages/registerPage');
}

const registerUser = (req, res) => {
    // essa função vem do plugin do passport-local-mongoose configurado no userSchema
    User.register({username: req.body.username}, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            res.redirect('/register');
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/home');
            });
        }
    });
}


const logoutUser = (req, res) => {
    req.logout();
    res.json({ message: 'Logout successful' });
}


module.exports = {
    renderLoginPage,
    loginUser,
    renderRegisterPage,
    registerUser,
    logoutUser
}   