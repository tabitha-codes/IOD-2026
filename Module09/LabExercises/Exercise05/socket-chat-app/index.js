const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
io.emit('connection', 'a user connected');
});
server.listen(3000, () => {
console.log('listening on *:3000');
});

 // when one person sends a message, send it to everyone
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // EXTENSION: tell everyone when someone disconnects
  socket.on('disconnect', () => {
    io.emit('system message', 'A user disconnected');
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});