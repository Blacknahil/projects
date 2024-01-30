const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');
const connectDB = require('./Tutor_Linkup/backend/config/db.js');
// const ChatRoom = require('./models/ChatRoom');
// const DirectMessage = require('./models/DirectMessage');

const userRouter = require("./Tutor_Linkup/backend/routes/userRouters.js")
const studyGroupRouter = require("./Tutor_Linkup/backend/routes/studyGroupRouters.js")
const searchRouter = require("./Tutor_Linkup/backend/routes/searchRouters.js")
const reviewRouter = require("./Tutor_Linkup/backend/routes/reviewRouters.js")
const postsRouter = require("./Tutor_Linkup/backend/routes/postsRouters.js")
const messagesRouter = require("./Tutor_Linkup/backend/routes/messagesRouters.js")
const conversationRouter = require("./Tutor_Linkup/backend/routes/conversationRouters.js")
const authRouter = require("./Tutor_Linkup/backend/routes/authRouters.js")
const bodyParser = require('body-parser');
const path = require('path');




const app = express();
connectDB();



// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Tutor_Linkup', 'backend', 'views'));

// Other middleware and route setup...

// Example route for displaying the create post page
const { displayPosts } = require('./Tutor_Linkup/backend/controllers/postsController.js');
const { displaySinglePost } = require('./Tutor_Linkup/backend/controllers/postsController.js');

app.get('/create-post', displayPosts);
app.get('/single-post/:id', displaySinglePost);

app.use(bodyParser.json());
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
    const token = socket.handshake.query.token;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log('Authentication error');
            socket.disconnect();
            return;
        }
        socket.userId = decoded.id;
        console.log(`Authenticated user with ID: ${socket.userId}`);

        socket.on('joinRoom', ({ roomId }) => {
            if (!socket.userId) {
                console.log('Unauthorized attempt to join room');
                return;
            }
            socket.join(roomId);
            console.log(`User ${socket.userId} joined room: ${roomId}`);
        });

        socket.on('leaveRoom', ({ roomId }) => {
            if (!socket.userId) {
                console.log('Unauthorized attempt to leave room');
                return;
            }
            socket.leave(roomId);
            console.log(`User ${socket.userId} left room: ${roomId}`);
        });

        socket.on('roomMessage', ({ roomId, message }) => {
            if (!socket.userId) {
                console.log('Unauthorized attempt to send message');
                return;
            }
            io.to(roomId).emit('newMessage', message);
        });

        socket.on('directMessage', ({ senderId, receiverId, message }) => {
            if (!socket.userId) {
                console.log('Unauthorized attempt to send direct message');
                return;
            }
            io.emit('newDirectMessage', message);
        });

        socket.on('disconnect', () => {
            console.log(`User ${socket.userId} disconnected`);
        });
    });
});


app.get('/', (req, res) => res.send('hello world'));

// console.log(review.url);

const port = process.env.PORT || 4078;
server.listen(port, () => console.log(`Server listening on port ${port}`));

