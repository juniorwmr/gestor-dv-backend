require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const errors = require('./errors');

const server = express();

// Iniciando o DB
var mongoDB = process.env.MONGO_URL;
mongoose.connect(
  mongoDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log('Database is ON!');
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.use(errors.NotFound);
server.use(errors.CatchAll);

server.listen(process.env.PORT || 3333);
