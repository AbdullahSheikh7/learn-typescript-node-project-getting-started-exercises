// Invite my friends to dinner tonight
let guests = ["Abdullah", "Ahmed", "Ali", "Bilal"];
for (let name of guests) {
  console.log(`Hi ${name}! You are invited to my party tonight!`);
}

// Replace a guest who can't cook and invite one who can
let falseGuest = Math.floor(Math.random() * guests.length);
console.log("\n" + guests[falseGuest] + "\n");

let newGuest = "Anas";
guests[falseGuest] = newGuest;

for (let name of guests) {
  console.log(`Hi ${name}! You are invited to my party tonight!`);
}

console.log("");

// Tell everyone that you founded a new bigger table and invite three more friends
for (let name of guests) {
  console.log(`Hi ${name}! I just found a bigger dinner table!`);
}

let newGuests = ["Jahanzaib", "Subhan", "Waqar"];
guests.unshift(newGuests[0]);
guests.splice(Math.floor(guests.length / 2), 0, newGuests[1]);
guests.push(newGuests[2]);

for (let name of guests) {
  console.log(`Hi ${name}! You are invited to my party tonight!`);
}

// Tell everyone that you can only invite two friends to your party
console.log(`\nHi everyone! I can only invite two peoples to my party tonight!\n`);

while (guests.length > 2) {
  console.log(`Hi ${guests[guests.length - 1]}, You aren't invited to my party tonight!`);
  guests.pop();
}

console.log("");

for (let name of guests) {
  console.log(`Hi ${name}! You are invited to my party tonight!`);
}


while (guests.length > 0) {
  guests.pop();
}

console.log("\nGuest List length: " + guests.length + "\n")
