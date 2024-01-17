const express = require('express');

const router = express.Router();

const rootRoute = require('./root');
router.use('/', rootRoute);

const loginRoutes = require('./loginRoutes.js');
router.use('/', loginRoutes);

const homeRoute = require('./home');
router.use('/', homeRoute);

const explorerHomeRoute = require('./explorer/explorerHomeRoute.js');
router.use('/', explorerHomeRoute);

const notificationPageRoutes = require('./notifications/notificationPageRoutes.js');
router.use('/', notificationPageRoutes);

const userPageRoute = require('./user/userPagesRoute.js');
router.use('/', userPageRoute);
const userRoutes = require('./user/userRoutes.js');
router.use('/', userRoutes);

const newPostPageRoute = require('./post/newPostPageRoute.js'); 
router.use('/', newPostPageRoute);
const postRoutes = require('./post/postRoutes.js'); 
router.use('/', postRoutes);

const messagespageRoute = require('./messages/messagesPageRoute.js');
router.use('/', messagespageRoute);

const chatRoutes = require('./messages/chatRoutes.js');
router.use('/', chatRoutes);

const searchPageRoutes = require('./search/searchPageRoutes.js');
router.use('/', searchPageRoutes);

module.exports = router;