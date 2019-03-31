const db = require('../../db/database.js');
const reg = require('./status.js');

module.exports = (function () {
    function hascred(res, req, next, where) {
        if (!req.body.email || !req.body.password) {
            let obj = reg.reterror(401, where, "Email or password missing");

            return res.status(401).json(obj);
        }
        next();
    }

    function asksqlite(res, req, next) {
        db.get("SELECT * FROM users WHERE email = ?",
            req.body.email, (err, user) => {
                if (err) {
                    let obj = reg.reterror(500, "/login", err.message);

                    return res.status(500).json(obj);
                }

                if (user === undefined) {
                    let obj = reg.reterror(401, "/login", "User with provided email not found.");

                    return res.status(401).json(obj);
                }
            res.locals.err = err;
            res.locals.user = user;
            next();
        });
    }

    return {
        hascred: hascred,
        asksqlite: asksqlite
    };
}());
