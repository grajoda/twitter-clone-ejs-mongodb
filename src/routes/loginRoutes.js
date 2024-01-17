const express = require('express');
const cookieParser = require("cookie-parser");

const sessionControllers = require('../controllers/sessionControllers')

const router = express.Router();
router.use(cookieParser());

router.get('/login', sessionControllers.renderLoginPage);
router.post('/login', sessionControllers.loginUser);


router.get('/register', sessionControllers.renderRegisterPage);
router.post('/register', sessionControllers.registerUser);

  
router.get('/logout', sessionControllers.logoutUser);



module.exports = router;