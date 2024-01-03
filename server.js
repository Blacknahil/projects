const express = require('express');
const http = require('http');
const connectDB = require('./Tutor_Linkup/backend/config/db.js');
const review = require('./Tutor_Linkup/backend/models/review.js');
const app = express();
connectDB();

app.get('/', (req, res) => res.send('hello world'));
const port = process.env.PORT || 4078;

app.listen(port, () => console.log(`Server listening on port ${port}`));

// console.log(review.url);