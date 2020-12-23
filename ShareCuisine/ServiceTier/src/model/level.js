const mongoose = require('mongoose');

levelSchema= new mongoose.Schema({

    name:{
        type:String
    },
    value:{
        type: String
    },
    isDefault:{
        type: Boolean,
        default :false
    }


});

module.exports = mongoose.model('level', levelSchema);
