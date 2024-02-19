let guests = ["Abdullah", "Ahmed", "Ali", "Bilal"];

for (let name of guests) {
  console.log(`Hi ${name}! You are invited to my party tonight!`);
}

let falseGuest = Math.floor(Math.random() * guests.length);
let newGuest = "Anas";
console.log("\n" + guests[falseGuest] + "\n");
guests[falseGuest] = newGuest;

for (let name of guests) {
  console.log(`Hi ${name}! You are invited to my party tonight!`);
}
