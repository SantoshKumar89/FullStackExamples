const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Setup schema
const craftSchema = mongoose.Schema({
    createdBy: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    publish: {
        type: Boolean,
        default: false
    },
    enableCertificate: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        required: true
    },
    targetYourStudents: {
        learn: {
            answer: { type: [String], default: [""] }
        },
        prerequisites: {
            answer: { type: [String], default: [""] }
        },
        target: {
            answer: { type: [String], default: [""] }
        }
    },
    curriculum: {
        sections: [
            {
                title: { type: String },
                contents: [{
                    title: { type: String },
                    content:{
                    embed: {
                        url: { type: String }
                    }, upload: {
                        location:{type: String}
                    }},                   
                    description: { type: String },
                    resources: { type: [String] }

                }]
            }]
    },
    courseLandingPage: {
        courseTitle: {
            type: String,
            default: ""
        },
        courseSubtitle: {
            type: String,
            default: ""
        },
        courseDescription: {
            type: String,
            default: ""
        },
        basicInfo: {
            language: {
                type: Schema.Types.ObjectId, ref: 'language',
                default: null
            },
            level: {
                type: Schema.Types.ObjectId, ref: 'level',
                default: null
            }
        }, courseImage: {
            type: String,
            default: ""
        },
        promotionalVideo: {
            type: String,
            default: ""
        }
    },
    settings: {
        enrollment: {
            option: {
                type: Schema.Types.ObjectId, ref: 'enrollment'
            },
            password: {
                type: String,

            }
        }
    }
}, {
    versionKey: false
});
// Export craft model
const craft = module.exports = mongoose.model('craft', craftSchema);
module.exports.get = function (callback, limit) {
    craft.find(callback).limit(limit);
}