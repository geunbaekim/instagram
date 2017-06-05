var express = require('express');
var session= require('express-session');
var router = express.Router();

router.use(session({
 secret:'1234dsps@g1234!#s$sda',
 resave: false,
 saveUninitialized: true
}));




module.exports = router;
