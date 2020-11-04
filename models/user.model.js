var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    address: String,
    company: String
});

module.exports = mongoose.model('User', userSchema);
