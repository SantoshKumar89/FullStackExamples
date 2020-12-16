const mongoose = require('mongoose');

levelSchema= new mongoose.Schema({

    name:{
        type:String
    },
    value:{
        type: String
    }


});

module.exports = mongoose.model('level', levelSchema);
