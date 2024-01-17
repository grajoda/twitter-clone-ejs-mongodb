const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/userControllers');

const router = express.Router();

router.get('/user/:id',  auth, userController.renderUserPage);

router.get('/user/:id/update',  auth, userController.renderUserUpdatePage);

 
module.exports = router  