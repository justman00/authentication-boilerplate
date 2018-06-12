// main starting point of the app
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB setup
mongoose.connect('mongodb://localhost:27017/auth');


// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
