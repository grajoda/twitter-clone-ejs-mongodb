const express = require('express');
const mongoose = require('mongoose');

const User = require ('../../models/userSchema');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/notifications', auth, (req, res) => {
    res.render('pages/notifications', {
        user: req.user
    });
});

module.exports = router  