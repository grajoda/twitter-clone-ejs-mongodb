const express = require('express');
const auth = require('../middlewares/auth');
const homeController = require('../controllers/homeControllers');

const router = express.Router();

router.get('/home', auth, homeController.renderHomePage);
 
module.exports = router   