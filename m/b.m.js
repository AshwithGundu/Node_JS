var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    g : String
   });
           
module.exports = mongoose.model('C', userSchema);