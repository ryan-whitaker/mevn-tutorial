const express = require('express');

const router = express.Router();

const Survey = require('../models/survey');

// Get all surveys
router.post('/all', async(req, res) => {
    const filteredSurveys = [];
    const allSurveys = await Survey.find();

    allSurveys.forEach(survey => {
        if (survey.creatorId === req.body.userId) {
            filteredSurveys.push(survey);
        } else if (survey.mayPublish === true) {
            filteredSurveys.push(survey);
        }
    });

    res.json(filteredSurveys);
});

// Post survey to database
router.post('/new', async(req, res) => {
    const newSurvey = new Survey(req.body);
    const savedSurvey = await newSurvey.save();
    res.json(savedSurvey);
});

// Delete a survey
router.post('/delete', async(req, res) => {

    Survey.find({_id: req.body.surveyId}, 'creatorId', async(err, docs) => {
        const creatorId = docs[0].creatorId;
        if (creatorId === req.body.userId) {
            await Survey.deleteOne({ _id: req.body.surveyId })
            res.json({message: 'Successfully deleted survey!'})
        } else {
            res.json({message: 'You do not have permission to do that!'})
        }
    });    
});

module.exports = router;