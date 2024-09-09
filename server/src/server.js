const express = require("express");
const apiRoutes = require("./routes");
const resError = require("./utils/handleError")
const cors = require("cors");
const cookieParser = require('cookie-parser')
const server = express();


server.use(express.json());
server.use(cors());
server.use(cookieParser());

server.use('/api/v1',apiRoutes);
server.all('*',(req,res,next)=>{
    res.status(400).json({
        status:'fail',
        message:`Can't find ${req.originalUrl} on the server!`
    })
})
server.use((err,req,res,next)=>{
    const {statusCode,message}=err
    resError(res,statusCode,message)
})
module.exports = server;
