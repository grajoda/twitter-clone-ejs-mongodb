const Message = require('../models/messageSchema');
const Chat = require('../models/chatSchema');
const User = require('../models/userSchema');


const renderMessagesPage = async (req, res) => {
    try {
        const userChats = await Chat.find({_id: {$in: req.user.chats}});

        res.render('pages/messagesPage', {
            user: req.user,
            chats: userChats
        });

    } catch(err) {
        console.log(err);
        res.redirect('back');
    }

}




const renderChatPage = async (req, res) => {
    try {
        let receiverId;
        const chatId = req.params.chatId;
        const pageChat = await Chat.findOne({_id: chatId});
        const messages = await Message.find({_id: {$in: pageChat.messages}});
        const menuChats = await Chat.find({_id: {$in: req.user.chats}});
    
        // if (pageChat.type == 'private') {}
    
        const chatMembersIds = pageChat.members;
    
        for(let i = 0 ; i <= chatMembersIds.length; i++) {
            if (chatMembersIds[i] != req.user._id) {
                receiverId = chatMembersIds[i];
            }
        }
        
        const receiver = await User.findOne({_id: receiverId});
    
        res.render('pages/chatPage', {
            user: req.user,
            messages: messages,
            receiver: receiver,
            chats: menuChats,
            page_chat_id: pageChat._id
        });

    } catch (err) {
        console.log(err);
        res.redirect('back');
    }
    
}



module.exports = {
    renderMessagesPage,
    renderChatPage

}