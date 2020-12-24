const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Setup schema
const craftSchema = mongoose.Schema({
    createdBy: {
        type: Schema.Types.ObjectId, ref: 'user'
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
            answer: { type: [String], default: ["To Build Craft"] }
        },
        prerequisites: {
            answer: { type: [String], default: ["Paper","Glue","Paint"] }
        },
        target: {
            answer: { type: [String], default: ["Beginners","All Levels"] }
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
            default: "Course Title"
        },
        courseSubtitle: {
            type: String
        },
        courseDescription: {
            type: String,
            default: "Course Description"
        },
        basicInfo: {
            language: {
                type: Schema.Types.ObjectId, ref: 'language'
            },
            level: {
                type: Schema.Types.ObjectId, ref: 'level'
            }
        }, courseImage: {
            type: String
        },
        promotionalVideo: {
            type: String
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