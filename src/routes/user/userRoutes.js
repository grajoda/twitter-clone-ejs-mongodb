const express = require('express');

const auth = require('../../middlewares/auth');
const userController = require('../../controllers/userControllers');

const router = express.Router();


router.post('/user/:id/follow',  auth, userController.followUser);

router.post('/user/:id/update',  auth, userController.updateUser);

router.get('/user/:id/profilePicture',  auth, userController.getUserImg);



 
module.exports = router  