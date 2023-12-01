const { model, Schema } = require('mongoose');

const chatMessageSchema = new Schema({
    nombre: String,
    mensaje: String
}, { versionKey: false, timestamps: true });

module.exports = model('chatmessage', chatMessageSchema);