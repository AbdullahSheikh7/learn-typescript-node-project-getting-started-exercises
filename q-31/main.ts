const usernames: string[] =[];

if (usernames.length === 0) {
  console.log("We need to find some users");
} else {
  for (let names of usernames) {
    if (names === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
    } else {
    console.log(`Hello ${names}, thank you for logging in again.`);
    }
  }
}