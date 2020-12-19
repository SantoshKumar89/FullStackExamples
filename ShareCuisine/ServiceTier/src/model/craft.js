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
            answer:{type: [String], default:[""]}
        },
        prerequisites: {
            answer:{type: [String],default:[""]}
        },
        target: {
            answer:{type: [String],default:[""]}
        }
    },
    curriculum: {

    },
    courseLandingPage: {
        courseTitle: {
            type: String
        },
        courseSubtitle: {
            type: String
        },
        courseDescription: {
            type: String
        },
        basicInfo: {
            language: {
                type: Schema.Types.ObjectId, ref: 'Language'
            },
            level: {
                type: Schema.Types.ObjectId, ref: 'Level'
            }

        }
    },
    courseImage: {
        type: String
    },
    promotionalVideo: {
        type: String
    },

    settings: {
        enrollment: {
            option: {
                type: String
            },
            password: {
                type: String
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