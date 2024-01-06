const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user'); // Adjust the path according to your project structure

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;
