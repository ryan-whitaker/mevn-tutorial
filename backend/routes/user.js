const express = require('express');

const router = express.Router();

const User = require('../models/user');
// const auth = require('../middleware/auth');


router.post('/signup', async (req, res) => {
    const user = new User(req.body);
    if (await User.findOne({ email: user.email})) {
        const error = "Email already taken!"
        res.status(400).send({ message: error })
    } else {
        try {
            await user.save();
            const token = await user.generateAuthToken();
            res.status(201).send({ user, token });
        } catch (e) {
            res.status(400).send(e);
        };
    }    
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