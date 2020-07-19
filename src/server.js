require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

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
    console.log("Database is ON!");
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);

app.listen(process.env.PORT || 3333);
