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

io.on("connection", (socket) => {
	console.log("New web socket connection");

	// sent to the client that connected
	socket.emit("message", "Welcome Positive Potato!");
	// sent to every client except the one that connected
	socket.broadcast.emit("message", "A new user has joined!");

	socket.on("sendMessage", (message, callback) => {
		io.emit("message", message);
		//       cbMessage
		callback("Delivered!");
	});

	socket.on("sendLocation", (coords) => {
		io.emit("message", `https://www.google.com/maps/@${coords.latitude},${coords.longitude}`);
	});

	socket.on("disconnect", () => {
		io.emit("message", "A user has left.");
	});
});

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
