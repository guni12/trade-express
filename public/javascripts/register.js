//const sqlite3 = require('sqlite3').verbose();
//const db = new sqlite3.Database('./db/texts.sqlite');

const db = require('../../db/database.js');
const reg = require('./status.js');
const saltRounds = 10;

module.exports = (function () {
    function hashbcrypt(req, res) {
        const bcrypt = require('bcrypt');
        const simplepw = req.body.password;
        const email = req.body.email;

        if (!email || !simplepw) {
            let obj = reg.reterror(401, "/register", "Email or password missing");

            return res.status(401).json(obj);
        }
        bcrypt.hash(simplepw, saltRounds, function(err, hash) {
            if (err) {
                let obj = reg.reterror(500, "/register", "bcrypt error");

                return res.status(500).json(obj);
            }

            db.run("INSERT INTO users (email, password) VALUES (?, ?)",
                email, hash, (err) => {
                    if (err) {
                        let obj = reg.reterror(500, "/register", err.message);

                        return res.status(500).json(obj);
                    }

                    res.status(201).json({
                        data: {
                            message: "User " + email + " successfully registered with: ." + hash
                        }
                    });
                });
        });
    }


    return {
        hashbcrypt: hashbcrypt,
    };
}());

