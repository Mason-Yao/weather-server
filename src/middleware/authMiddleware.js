const passport = require("passport");

const authenticateLogin = passport.authenticate("jwt", { session: false });

module.exports = {
    authenticateLogin,
};