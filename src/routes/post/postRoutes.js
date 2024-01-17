const express = require('express');

const auth = require('../../middlewares/auth');
const postController = require('../../controllers/postControllers')

const router = express.Router();

router.post('/newPost',  auth, postController.createNewPost);

router.get('/post/:postId/like',  auth, postController.likePost);

module.exports = router;   