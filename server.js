const express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var PORT = process.env.PORT || 8000;

app.use(express.static(`${__dirname}/client`));
let dwgArr = [];
io.on("connection", function (socket) {
  socket.on("drawing", function (dwg) {
    dwgArr.push(dwg);
    io.emit("drawing", dwg);
  });
});

http.listen(PORT, function () {
  console.log(`Server Started on PORT: ${PORT}`);
});
