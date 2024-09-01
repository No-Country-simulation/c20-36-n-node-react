const express = require("express");
const mainRouter = require("./routes/mainRouter");

const cors = require("cors");

const server = express();


server.use(express.json());
server.use(cors());

server.use(mainRouter);

module.exports = server;
