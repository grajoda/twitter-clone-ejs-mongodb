const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    notifier: mongoose.Schema.Types.ObjectId,
    post: mongoose.Schema.Types.ObjectId,
    text: String
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;