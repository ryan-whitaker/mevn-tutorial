const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const Survey = require('../models/survey');

// Get all surveys
router.post('/all', auth, async(req, res) => {
    const userId = req.user._id
    // console.log(req.body.userId)
    const filteredSurveys = [];
    const allSurveys = await Survey.find();

    allSurveys.forEach(survey => {
        if (survey.creatorId === userId) {
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
router.post('/delete', auth, async(req, res) => {
    

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