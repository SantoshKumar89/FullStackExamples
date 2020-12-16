const mongoose = require('mongoose');

const languageSchema =  mongoose.Schema({

    locale:{
        type:String
    },
    name:{
        type: String
    }

});


module.exports = mongoose.model('language', languageSchema);
