// I'm Abdullah on 18-02-2024 00:15
// This is a code that has a string "Abdullah" in a variable myname and then prints it in uppercae, lowercase and titlecase

let myname = "Abdullah";
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()));
