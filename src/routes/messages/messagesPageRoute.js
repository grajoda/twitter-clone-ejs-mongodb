const express = require('express');

const auth = require('../../middlewares/auth');
const messagesControllers = require('../../controllers/messageControllers');

const router = express.Router();

router.get('/messages', auth, messagesControllers.renderMessagesPage); 

router.get('/messages/chat/:chatId', auth, messagesControllers.renderChatPage); 


module.exports = router   