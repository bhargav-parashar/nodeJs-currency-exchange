const express = require('express');
const server = express();
const port = 9000;
const exchangeRouter = require("./routes/exchange.routes.js");


server.use("/exchange",exchangeRouter);

server.listen(port,()=>{console.log(`Listening at port: ${port}`)});