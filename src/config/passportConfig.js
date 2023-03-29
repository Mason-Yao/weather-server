const ExtractJwt = require("passport-jwt").ExtractJwt
const JwtStrategy = require("passport-jwt").Strategy
const User = require("../models/userModel")
require("dotenv").config();

// config Passport to use jwt strategy
module.exports = (passport) => {
    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.JWT_SECRET || "mySecret";
    passport.use(new JwtStrategy(opts, async (payload, done) => {
        try {
            const user = await User.findById(payload.id);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return done(err, false);
        }
    }));
}