const Role = require('../models/role');

module.exports.createRole = (params) => {
    return new Role(params).save();
};

module.exports.getRole = (query) => {
    return Role.findOne(query).lean().exec();
};

module.exports.getRoles = (query) => {
    return Role.find(query).lean().exec();
};


module.exports.updateRole = (query, data) => {
    return Role.update(query, data).exec();
};