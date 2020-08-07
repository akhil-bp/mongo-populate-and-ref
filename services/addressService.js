const Address = require('../models/address');

module.exports.createAddress = (params) => {
    return new Address(params).save();
};

module.exports.getAddress = (query) => {
    return Address.findOne(query).lean().exec();
};

module.exports.getAddress = (query) => {
    return Address.find(query).lean().exec();
};


module.exports.updateAddress = (query, data) => {
    return Address.update(query, data).exec();
};