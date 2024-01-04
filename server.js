const express = require('express');
const http = require('http');
const connectDB = require('./Tutor_Linkup/backend/config/db.js');

const userRouter = require("./Tutor_Linkup/backend/routes/userRouters.js")
const studyGroupRouter = require("./Tutor_Linkup/backend/routes/studyGroupRouters.js")
const searchRouter = require("./Tutor_Linkup/backend/routes/searchRouters.js")
const reviewRouter = require("./Tutor_Linkup/backend/routes/reviewRouters.js")
const postsRouter = require("./Tutor_Linkup/backend/routes/postsRouters.js")
const messagesRouter = require("./Tutor_Linkup/backend/routes/messagesRouters.js")
const conversationRouter = require("./Tutor_Linkup/backend/routes/conversationRouters.js")
const authRouter = require("./Tutor_Linkup/backend/routes/authRouters.js")

const app = express();
connectDB();

app.use("/user", userRouter);
app.use("/group", studyGroupRouter);
app.use("/search", searchRouter);
app.use("/review", reviewRouter);
app.use("/posts", postsRouter);
app.use("/user/messages", messagesRouter);
app.use("/messages/conversation", conversationRouter);
app.use("/signup", authRouter);


app.get('/', (req, res) => res.send('hello world'));
const port = process.env.PORT || 4078;

app.listen(port, () => console.log(`Server listening on port ${port}`));




// console.log(review.url);