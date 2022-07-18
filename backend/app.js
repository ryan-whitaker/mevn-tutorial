const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const middleware = require('./middleware/mw');
const SurveyRoutes = require('./routes/survey');
const UserRoutes = require('./routes/user');

const path = `${__dirname}/views/`

const app = express();
app.use(express.static(path))
app.use(middleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/surveys', SurveyRoutes);
app.use('/users', UserRoutes);

const mongoUri = "mongodb://0.0.0.0:27017";

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(error => console.log(error));

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(`${path}index.html`)
});

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});