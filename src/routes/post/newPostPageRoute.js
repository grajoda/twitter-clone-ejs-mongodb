const express = require('express');

const auth = require('../../middlewares/auth'); 
const postController = require('../../controllers/postControllers')

const router = express.Router();

router.get('/newPost',  auth, postController.renderNewPostPage);

module.exports = router  