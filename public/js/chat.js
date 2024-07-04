/* 
- the io function is called from the socket.io.js library via the html script tag
    when this script is loaded into the browser, it provides the io function globally by attaching it to the global scope (typically the window object)
- connect to the Socket.IO server, by default it is the server from which the script was served, typically the same server hosting your web app
- returns a Socket object which represents the client's connection to the server and allows the client to interact with the server using the Socket.IO protocol
    it provides methods for sending and receiving messages (events) between the client and the server
*/
const socket = io();

// on countUpdated event
socket.on("countUpdated", (count) => {
	console.log("The count has been updated!", count);
});

document.querySelector("#increment").addEventListener("click", () => {
	console.log("Clicked");
	socket.emit("increment");
});
