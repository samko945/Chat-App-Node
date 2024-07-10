const $roomList = document.querySelector("#room__list");

const roomListItemTemplate = document.querySelector("#room__list-item-template").innerHTML;

const rooms = [
	{ name: "maple", users: 2 },
	{ name: "cloud", users: 1 },
];

const html = Mustache.render(roomListItemTemplate, { rooms });
$roomList.innerHTML = DOMPurify.sanitize(html);
