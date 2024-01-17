const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/home');
    } else {
        res.redirect('/login');
    }
});
 
module.exports = router