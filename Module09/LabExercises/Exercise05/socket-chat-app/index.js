const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// io.on("connection", (socket) => {
//   io.emit("connection", "a user connected");
// });

// everyone currently online, as { socketId: nickname }
let onlineUsers = {};

// sends the full list of names to everyone (including whoever just joined)
function sendOnlineList() {
  io.emit("online users", Object.values(onlineUsers));
}

io.on("connection", (socket) => {
  // default name, in case a message arrives before "join"
  socket.data.nickname = "Anonymous";

  // the browser sends its nickname right after connecting
  socket.on("join", (nickname) => {
    if (typeof nickname === "string" && nickname.trim()) {
      socket.data.nickname = nickname.trim().slice(0, 20); // max 20 characters
    }
    onlineUsers[socket.id] = socket.data.nickname; // add to the online list
    io.emit("system message", `${socket.data.nickname} joined the chat`);
    sendOnlineList();                               // 
  });

  // when one person sends a message, send it to everyone
  // updated- messages now start with the sender's nickname
  socket.on("chat message", (msg) => {
    // io.emit('chat message', `${socket.data.nickname}: ${msg}`);
    if (typeof msg !== "string" || !msg.trim()) return; // ignore empty or non-text messages
    socket.broadcast.emit("chat message", `${socket.data.nickname}: ${msg.trim().slice(0, 500)}`);
  });

  // tell everyone else when this user starts or stops typing
  socket.on("typing", (isTyping) => {
    socket.broadcast.emit("typing", {
      id: socket.id,
      name: socket.data.nickname,
      isTyping: Boolean(isTyping),
    });
  });

  // ext: tell everyone when someone disconnects
  // updated- the disconnect message now uses the nickname
  socket.on("disconnect", () => {
    delete onlineUsers[socket.id];                  // remove from the online list
    socket.broadcast.emit("typing", { id: socket.id, name: socket.data.nickname, isTyping: false });
    io.emit("system message", `${socket.data.nickname} left the chat`);
    sendOnlineList();                               //
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
