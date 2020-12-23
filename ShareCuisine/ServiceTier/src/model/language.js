const mongoose = require('mongoose');

const languageSchema =  mongoose.Schema({

    locale:{
        type:String
    },
    name:{
        type: String
    }, isDefault:{
        type: Boolean,
        default :false
    }

});


module.exports = mongoose.model('language', languageSchema);
