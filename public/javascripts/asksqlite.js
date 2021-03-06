const db = require('../../db/database.js');
const reg = require('./status.js');

module.exports = (function () {
    function asksqlite(res, req, next) {
        db.get("SELECT * FROM users WHERE email = ?",
            req.body.email, (err, user) => {
                res.locals.err = err;
                res.locals.user = user;
                next();
            }
        );
    }

    function iserror(res, req, next) {
        if (res.locals.err) {
            let obj = reg.reterror(500, "/login", res.locals.err.message);

            return res.status(500).json(obj);
        }
        next();
    }

    return {
        asksqlite: asksqlite,
        iserror: iserror
    };
}());
