const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

let count = 0;

// server (emit) -> client (receive) - countUpdated
// client (emit) -> server (receive) - increment

io.on("connection", (socket) => {
	console.log("New web socket connection");

	// countUpdated is the custom event name
	socket.emit("countUpdated", count);

	socket.on("increment", () => {
		count++;
		// socket.emit("countUpdated", count) Will emit only to one connection
		// emit to all connected clients
		io.emit("countUpdated", count);
	});
});

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
