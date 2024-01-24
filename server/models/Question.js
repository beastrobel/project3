const { Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const questionSchema = new Schema({
    questionAuthor: {
        type: String,
        required: true,
    },
    questionText: {
        type: String,
        required: `We're here to help you, let us know your question`,
        minLength: 1,
        maxLength: 300,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minLength: 1,
                maxLength: 300,
            },
            commentAuthor: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],
});

const Question = model('Question', questionSchema);

module.exports = Question;