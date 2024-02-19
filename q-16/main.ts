let guests = ["Abdullah", "Ahmed", "Ali", "Bilal"];

for (let name of guests) {
  console.log(`Hi ${name}! You are invited to my party tonight!`);
}

let falseGuest = Math.floor(Math.random() * guests.length);
console.log("\n" + guests[falseGuest] + "\n");

let newGuest = "Anas";
guests[falseGuest] = newGuest;

for (let name of guests) {
  console.log(`Hi ${name}! You are invited to my party tonight!`);
}

console.log("");

for (let name of guests) {
  console.log(`Hi ${name}! I just found a bigger dinner table!`);
}

console.log("");

let newGuests = ["Subhan", "Jahanzaib", "Waqar"];
guests.unshift(newGuests[0]);
guests.splice(Math.floor(guests.length / 2), 0, newGuests[1]);
guests.push(newGuests[2]);

for (let name of guests) {
  console.log(`Hi ${name}! You are invited to my party tonight!`);
}
