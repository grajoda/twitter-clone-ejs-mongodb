const mongoose = require('mongoose');
// const encrypt = require("mongoose-encryption");

const messageSchema = new mongoose.Schema({
    chat_id: mongoose.Types.ObjectId,
    author_id: String,
    text: String,
    time: String  
});

//messageSchema.plugin(encrypt, { secret: process.env.MONGOOSE_ENCRYPTION_KEY, encryptedFields: ["password"]});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message