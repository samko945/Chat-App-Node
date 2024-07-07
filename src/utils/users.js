const users = [];

// add user, removeUser, getUser, getUsersInRoom

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

addUser({ id: 22, username: "Sam", room: "Maple" });

console.log(users);

const removedUser = removeUser(22);

console.log(removedUser);
console.log(users);
