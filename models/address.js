const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    address: { type: String, default: "" },
}, {
    timestamps: true
});

module.exports = mongoose.model('Address', schema);