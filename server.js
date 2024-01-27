const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');
const connectDB = require('./Tutor_Linkup/backend/config/db.js');
const ChatRoom = require('./models/ChatRoom');
const DirectMessage = require('./models/DirectMessage');
const userRouter = require("./Tutor_Linkup/backend/routes/userRouters.js");
const studyGroupRouter = require("./Tutor_Linkup/backend/routes/studyGroupRouters.js");
const searchRouter = require("./Tutor_Linkup/backend/routes/searchRouters.js");
const reviewRouter = require("./Tutor_Linkup/backend/routes/reviewRouters.js");
const postsRouter = require("./Tutor_Linkup/backend/routes/postsRouters.js");
const messagesRouter = require("./Tutor_Linkup/backend/routes/messagesRouters.js");
const conversationRouter = require("./Tutor_Linkup/backend/routes/conversationRouters.js");
const authRouter = require("./Tutor_Linkup/backend/routes/authRouters.js");
const path = require('path');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
connectDB();

// Apply rate limiter to all requests
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Tutor_Linkup', 'backend', 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const { displayPosts, displaySinglePost } = require('./Tutor_Linkup/backend/controllers/postsController.js');

app.get('/create-post', displayPosts);
app.get('/single-post/:id', displaySinglePost);

app.use("/user", userRouter);
app.use("/group", studyGroupRouter);
app.use("/search", searchRouter);
app.use("/review", reviewRouter);
app.use("/posts", postsRouter);
app.use("/user/messages", messagesRouter);
app.use("/messages/conversation", conversationRouter);
app.use("/signup", authRouter);

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    // Socket.IO connection logic...
});

// Catch-all route for handling 404 errors
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Centralized error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/', (req, res) => res.send('hello world'));

const port = process.env.PORT || 4078;
server.listen(port, () => console.log(`Server listening on port ${port}`));
