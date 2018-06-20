var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    age : String,
   });
           
module.exports = mongoose.model('a', userSchema);