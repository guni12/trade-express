var express = require('express');
var router = express.Router();

const register = require('../public/javascripts/register.js');
const prep = require('../public/javascripts/prepare.js');


router.post("/",
    (req, res, next) => prep.hascred(res, req, next, "/register"),
    (req, res) => register.hashbcrypt(req, res));

module.exports = router;
