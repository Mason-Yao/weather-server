const passport = require("passport");

const authenticateLogin = passport.authenticate("jwt", { session: false });
const authenticateGoogle = passport.authenticate("google", { scope: ["profile"] });
const authenticateGoogleCallback = passport.authenticate("google", { session: false });

module.exports = {
    authenticateLogin,
    authenticateGoogle,
    authenticateGoogleCallback,
};