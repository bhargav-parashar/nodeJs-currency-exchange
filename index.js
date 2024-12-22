const express = require('express');
require("dotenv").config(); //Loads the env variables from the .env file
const server = express();
const port = 9000;
const exchangeRouter = require("./routes/exchange.routes.js");
const authorize = require("./middlewares/authorize.js");

server.use(authorize); //middleware to authorize request
server.use("/exchange",exchangeRouter);

server.listen(port,()=>{console.log(`Listening at port: ${port}`)});