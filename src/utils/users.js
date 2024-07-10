const users = [];

const addUser = ({ id, username, room }) => {
	// Clean data
	username = username.trim().toLowerCase();
	room = room.trim().toLowerCase();
	// Validate data
	if (!username || !room) {
		return {
			error: "Username and room are required.",
		};
	}
	// Check for existing user
	const userExists = users.find((user) => {
		return user.room === room && user.username === username;
	});
	// validate username
	if (userExists) {
		return {
			error: "Username is taken.",
		};
	}
	// Store user
	const user = { id, username, room };
	users.push(user);
	return { user };
};

const removeUser = (id) => {
	const index = users.findIndex((user) => user.id === id);
	if (index !== -1) {
		return users.splice(index, 1)[0];
	}
};

const getUser = (id) => {
	// return user or undefined
	return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
	room = room.trim().toLowerCase();
	return users.filter((user) => user.room === room);
};

module.exports = {
	users,
	addUser,
	removeUser,
	getUser,
	getUsersInRoom,
};
