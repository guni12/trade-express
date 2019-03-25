const db = require('../../db/database.js');
const reg = require('./status.js');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (function () {
    function login(res, req) {
        const simplepw = req.body.password;
        const email = req.body.email;

        if (!email || !simplepw) {
            let obj = reg.reterror(401, "/login", "Email or password missing");

            return res.status(401).json(obj);
        }

        db.get("SELECT * FROM users WHERE email = ?",
            email, (err, user) => {
                if (err) {
                    let obj = reg.reterror(500, "/login", err.message);

                    return res.status(500).json(obj);
                }

                if (user === undefined) {
                    let obj = reg.reterror(401, "/login", "User with provided email not found.");

                    return res.status(401).json(obj);
                }

                bcrypt.compare(simplepw, user.password, (err, result) => {
                    if (err) {
                        let obj = reg.reterror(500, "/login", "bcrypt error");

                        return res.status(500).json(obj);
                    }


                    if (result) {
                        const payload = { email: user.email, id: user.id };
                        const secret = process.env.JWT_SECRET;
                        const token = jwt.sign(payload, secret, { expiresIn: "1h"});
                        let obj = reg.retsuccess(payload, token, "User logged in");

                        return res.json(obj);
                    } else {
                        let obj = reg.reterror(401, "/login", "Password is incorrect.");

                        return res.status(401).json(obj);
                    }
                });
            });
    }


    return {
        login: login
    };
}());
