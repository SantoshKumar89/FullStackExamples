const mongoose = require('mongoose');

enrollmentSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type: String
    },
    helperText:{
        type: String
    }
})



module.exports = mongoose.model('enrollment', enrollmentSchema);
