const usernames: string[] = ['admin', 'Alice', 'Bob', 'Charlie'];

for (let names of usernames) {
	if (names === 'admin') {
		console.log('Hello admin, would you like to see a status report?');
	} else {
		console.log(`Hello ${names}, thank you for logging in again.`);
	}
}