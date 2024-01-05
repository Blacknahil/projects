const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');
const connectDB = require('./Tutor_Linkup/backend/config/db.js');
const ChatRoom = require('./models/ChatRoom');
const DirectMessage = require('./models/DirectMessage');

const app = express();
connectDB();

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

const port = process.env.PORT || 4078;
server.listen(port, () => console.log(`Server listening on port ${port}`));
