const express = require('express');
const mongoose = require('mongoose');

const Chat = require ('../../models/chatSchema');
const Message = require ('../../models/messageSchema');
const User = require ('../../models/userSchema');

const auth = require('../../middlewares/auth');
const chatController = require('../../controllers/chatControllers')

const router = express.Router();


router.post('/newPrivateChat/:receiverid', auth, chatController.createNewPrivateChat);

router.post('/chat/:chatId/newMessage', auth, chatController.newMessage);


module.exports = router   