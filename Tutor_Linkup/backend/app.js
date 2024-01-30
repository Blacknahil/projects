const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const connectDB = require('./config/db');
const User = require('./models/user');

// Passport Config
require('./config/passportConfig')(passport);

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors()); // Handle CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await User.register(new User({ username }), password);
        req.login(newUser, err => {
            if (err) return next(err);
            res.redirect('/dashboard');
        });
    } catch (err) {
        console.error(err);
        res.redirect('/register');
    }
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: false // Set to true if you want to use flash messages
}));

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

app.get('/dashboard', (req, res) => {
    res.send('Dashboard - User Logged In');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
