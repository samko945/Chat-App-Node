const socket = io();

const $inputRoom = document.querySelector("#room");

const roomListItemTemplate = document.querySelector("#room__list-item-template").innerHTML;

socket.on("updateRooms", (rooms) => {
	const $roomList = document.querySelector("#room__list");
	// render html via Mustache
	console.log(rooms);
});

// const fetchRoomList = () => {
// 	const rooms = fetch("/rooms")
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.then((rooms) => {
// 			const html = Mustache.render(roomListItemTemplate, { rooms });
// 			$roomList.innerHTML = DOMPurify.sanitize(html);

// 			const buttons = document.querySelectorAll(".room-button");
// 			console.log(buttons);
// 			buttons.forEach((button, index) => {
// 				button.addEventListener("click", () => {
// 					const roomName = rooms[index].name;
// 					$inputRoom.value = roomName;
// 				});
// 			});
// 		});
// };
// fetchRoomList();
// setInterval(fetchRoomList, 10000);
