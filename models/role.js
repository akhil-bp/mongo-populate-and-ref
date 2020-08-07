const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    type: { type: String, default: "moderator" },
}, {
    timestamps: true
});

module.exports = mongoose.model('User_roles', schema);