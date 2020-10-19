const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./utils/logger');
const config = require('./utils/config');
const blogRouter = require('./controllers/blog');

const app = express();
const mongoUrl = config.MONGODB_URI;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,
})
  .then(() => logger.info('Connected to Mongodb'))
  .catch((error) => logger.error('error connecting to Mongodb', error.message));

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/blogs', blogRouter);

module.exports = app;