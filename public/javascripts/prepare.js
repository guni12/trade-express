const reg = require('./status.js');

module.exports = (function () {
    function hascred(res, req, next, where) {
        if (!req.body.email || !req.body.password) {
            let obj = reg.reterror(401, where, "Email or password missing");

            return res.status(401).json(obj);
        }
        next();
    }

    return {
        hascred: hascred
    };
}());
