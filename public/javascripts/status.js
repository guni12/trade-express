module.exports = (function () {
    function reterror(stat, where, text) {
        return {
            errors: {
                status: stat,
                source: where,
                title: text,
                detail: text
            }
        };
    }

    function retsuccess(payload, token, text) {
        return {
            data: {
                type: "success",
                message: text,
                user: payload,
                token: token
            }
        };
    }

    return {
        reterror: reterror,
        retsuccess: retsuccess,
    };
}());
