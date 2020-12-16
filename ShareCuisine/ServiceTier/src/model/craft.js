const mongoose = require('mongoose');
const languageSchema= require('../model/language');

const levelSchema= require('../model/level');

// Setup schema
const craftSchema = mongoose.Schema({    
    publish: {
        type:Boolean,
        default: true
    },
    enableCertificate:{
        type:Boolean,
        default: true
    },
    title: {
        type: String,
        required: true
    },
    targetYourStudents:{
        learn:{
            type: [String]
        },
        prerequisites:{
            type: [String]
        },
        targetStudents:{
            type: [String]
        }
    },
    curriculum:{

    },
    courseLandingPage:{
        courseTitle:{
            type: String,
            required: true
        },
        courseSubtitle: {
            type: String
        },
        courseDescription: {
            type: String
        },
        basicInfo:{
            language:{
                type: languageSchema
            },
            level:{
                type: levelSchema
            }

        }
    },
    courseImage:{
        type:string
    },
    promotionalVideo:{
        type:string
    },

    settings:{
        enrollment:{
            option:{
                type:string
            },
            password:{
                type:string
            }
        }
    }

});
// Export craft model
const craft = module.exports = mongoose.model('craft', craftSchema);
module.exports.get = function (callback, limit) {
    craft.find(callback).limit(limit);
}