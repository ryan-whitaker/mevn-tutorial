const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    creatorName: {
        type: String,
        required: true,
        trim: true
    },
    creatorId: {
        type: String,
        required: true,
        trim: true
    },
    profession: {
        type: String,
        required: true,
        trim: true
    },
    product: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true,
        trim: true
    },
    comments: {
        type: String,
        required: false,
        trim: true
    },
    mayPublish: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('survey', SurveySchema);