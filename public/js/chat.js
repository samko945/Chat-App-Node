/* 
- the io function is called from the socket.io.js library via the html script tag
    when this script is loaded into the browser, it provides the io function globally by attaching it to the global scope (typically the window object)
- connect to the Socket.IO server, by default it is the server from which the script was served, typically the same server hosting your web app
- returns a Socket object which represents the client's connection to the server and allows the client to interact with the server using the Socket.IO protocol
    it provides methods for sending and receiving messages (events) between the client and the server
*/
const socket = io();

document.querySelector("#message-form").addEventListener("submit", (e) => {
	e.preventDefault();
	const message = e.target.elements.message.value;
	// emit( arg1=eventName,  [...args]=data,  cb=ran when acknoledged from other end )
	socket.emit("sendMessage", message, (error) => {
		if (error) return console.log(error);
		console.log("Message delivered!");
	});
});

socket.on("message", (message) => {
	console.log(message);
});

document.querySelector("#send-location").addEventListener("click", () => {
	if (!navigator.geolocation) {
		return alert("Geolocation is not supported by your browser.");
	}

	navigator.geolocation.getCurrentPosition((position) => {
		const coords = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		};
		socket.emit("sendLocation", coords, () => {
			console.log("Location shared!");
		});
	});
});
