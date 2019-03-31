var express = require('express');
var router = express.Router();

const login = require('../public/javascripts/login.js');
const prep = require('../public/javascripts/prepare.js');

router.post("/",
    (req, res, next) => prep.hascred(res, req, next, "/login"),
    (req, res, next) => prep.asksqlite(res, req, next),
    (req, res) => login.login(res, req));

module.exports = router;
