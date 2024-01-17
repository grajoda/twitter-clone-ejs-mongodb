const mongoose = require('mongoose');
// const encrypt = require("mongoose-encryption");

const member = {
    member_id: String,
    member_username: String
}

const chatSchema = new mongoose.Schema({
    chat_title: [String],
    members: [mongoose.Types.ObjectId],
    // members_nicknames: [String],
    type: String,
    messages: [mongoose.Types.ObjectId], 
    media: [String]
});

//chatSchema.plugin(encrypt, { secret: process.env.MONGOOSE_ENCRYPTION_KEY, encryptedFields: ["password"]});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat