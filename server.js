const express = require('express');
const http = require('http');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');

// DB and Passport Configuration
const connectDB = require('./Tutor_Linkup/backend/config/db');
require('./Tutor_Linkup/backend/config/passportConfig')(passport);

// Model Imports
const User = require('./Tutor_Linkup/backend/models/user');

// Router Imports
const userRouter = require("./Tutor_Linkup/backend/routes/userRouters");
const studyGroupRouter = require("./Tutor_Linkup/backend/routes/studyGroupRouters");
const searchRouter = require("./Tutor_Linkup/backend/routes/searchRouters");
const reviewRouter = require("./Tutor_Linkup/backend/routes/reviewRouters");
const postsRouter = require("./Tutor_Linkup/backend/routes/postsRouters");
const messagesRouter = require("./Tutor_Linkup/backend/routes/messagesRouters");
const conversationRouter = require("./Tutor_Linkup/backend/routes/conversationRouters");
const authRouter = require("./Tutor_Linkup/backend/routes/authRouters");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

connectDB();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Socket.IO Communication
io.on('connection', (socket) => {
    // ... your existing socket.io code here
});

// Routes
app.use("/user", userRouter);
app.use("/group", studyGroupRouter);
app.use("/search", searchRouter);
app.use("/review", reviewRouter);
app.use("/posts", postsRouter);
app.use("/user/messages", messagesRouter);
app.use("/messages/conversation", conversationRouter);
app.use("/signup", authRouter);

// Authentication Routes
app.post('/register', async (req, res) => {
    // ... your existing register code here
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: false
}));

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

app.get('/dashboard', (req, res) => {
    res.send('Dashboard - User Logged In');
});

// Base Route
app.get('/', (req, res) => res.send('hello world'));

// Server Listening
const PORT = process.env.PORT || 4078;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
