const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dynamoose = require('dynamoose');
const config = require('./config/config.js');
const tp = require('./middleware/TokenProcessor');

require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  dynamoose.aws.sdk.config.update(config.aws_local_config);
} else {
  dynamoose.aws.sdk.config.update(config.aws_remote_config);
}

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// const authRouter = require('./routes/auth');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/encounters', tp.authenticateToken, encountersRouter);
// app.use('/api/auth', authRouter);

module.exports = app;
