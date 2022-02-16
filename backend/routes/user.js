const express = require('express');

const router = express.Router();

const User = require('../models/user');
// const auth = require('../middleware/auth');


router.post('/signup', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        console.log(token);
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    };
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
        
    } catch (error) {
        res.status(400).send();
    };
});

router.get('/all', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;