const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const Survey = require('../models/survey');

// Get all surveys
router.post('/all', auth, async(req, res) => {
    try {
        const userId = req.user._id.toString();
        const filteredSurveys = [];
        const allSurveys = await Survey.find();
    
        allSurveys.forEach(survey => {
            console.log(survey.creatorId)
            if (survey.creatorId === userId) {
                filteredSurveys.push(survey);
            } else if (survey.mayPublish === true) {
                filteredSurveys.push(survey);
            }
        });
    
        res.json(filteredSurveys);
    } catch (error) {
        res.send({error: error})
    }    
});

// Post survey to database
router.post('/new', auth, async(req, res) => {
    try {
        const newSurvey = new Survey(req.body);
        const savedSurvey = await newSurvey.save();
        res.json(savedSurvey);
    } catch (error) {
        res.send({error: error})
    }    
});

// Delete a survey
router.post('/delete', auth, async(req, res) => {
    try {
        const userId = req.user._id.toString();
        Survey.find({_id: req.body.surveyId}, 'creatorId', async(err, docs) => {
            const creatorId = docs[0].creatorId;
            if (creatorId === userId) {
                await Survey.deleteOne({ _id: req.body.surveyId })
                res.json({message: 'Successfully deleted survey!'})
            } else {
                res.json({message: 'You do not have permission to do that!'})
            }
        }); 
    } catch (error) {
        res.send({error: error})
    }       
});

module.exports = router;