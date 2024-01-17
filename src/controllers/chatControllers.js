const Chat = require('../models/chatSchema');
const User = require('../models/userSchema');
const Message = require ('../models/messageSchema');



const createNewPrivateChat =  async (req, res) => {
    try {
        const receiverId = req.params.receiverid;
        const chatMembers = [ receiverId, req.user._id ];

        const receiver = await User.findOne({_id: receiverId.toString()});

        console.log(receiver);

        const chatTitles = [ receiver.username.toString() , req.user.username.toString() ];
        membersNicknames = [ receiver.ni ]

        const newChat = new Chat({
            chat_title: chatTitles,
            members: chatMembers,
            type: 'private'
        });

        await newChat.save();

        await User.findOneAndUpdate({_id: receiverId.toString()}, {$push: {chats: newChat._id}});
        await User.findOneAndUpdate({_id: req.user._id}, {$push: {chats: newChat._id}});

        res.redirect('/messages/chat/' + newChat._id );

    } catch (err) {
        console.log(err);
        res.redirect('back');
    }
}



const newMessage = async (req, res) => {
    try {
        const chatId = req.params.chatId;
        const messageText = req.body.messageText;

        const newMessage = new Message({
            author_id: req.user._id,
            text: messageText
        });

        await newMessage.save();
        await Chat.findOneAndUpdate({_id: chatId}, {$push: {messages: newMessage._id}});

        res.redirect('back');

    } catch(err) {
        console.log(err);
        res.redirect('back');
    }
}



module.exports = {
    createNewPrivateChat,
    newMessage

}