const mongoose = require('mongoose');
const Messages = require('./messages');
const User_roles = require('./role');
const Address = require('./address');

const schema = new mongoose.Schema({

    name: { type: String, default: "noname", required: true },
    place: { type: String, default: "-" },
    state: { type: String, default: "-" },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User_roles"
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('User', schema);