const express = require('express');
const cors = require('cors');

const router = express.Router();

var acceptList = [
    'http://localhost:3000',
    'http://localhost:8080'
];

router.use(cors({
    origin: function(origin, callback){
        var inAcceptList = acceptList.indexOf(origin) !== -1;
        callback(null, inAcceptList);
    },
    methods:["GET", "PUT", "POST", "DELETE"],
    allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
    maxAge:-1
}));
  
module.exports = router;