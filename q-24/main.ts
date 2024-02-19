let myname = "Abdullah";
let age = 16;
let n = 11;
let names = ["Abdullah", "Ahmed", "Ali", "Mohammed"];

if (myname == "Abdullah") {
  console.log("My name is Abdullah");
} else if (myname != "Abdullah") {
  console.log("My name is not Abdullah");
}

if (myname == "abdullah") {
  console.log("Lowercase is working");
} else {
  console.log("Lowercase doesn't work");
}

if (n < 10) {
  console.log("n is less than 10")
} else if (n > 10) {
  console.log("n is greater than 10");
}

if (n == 15) {
  console.log("n is equal to 15");
} else if (n != 15) {
  console.log("n is not equal to 15");
}

if (n >= 15) {
  console.log("n is equal to or greater than 15");
} else if (n <= 15) {
  console.log("n is equal to or less than 15");
}

if (myname == "Abdullah" && age == 16) {
  console.log("Abdullah age is 16");
}

if (myname == "Abdullah" || age == 16) {
  console.log("Age is 16 or Name is Abdullah");
}

if (names.includes("Abdullah")) {
  console.log("Names contain Abdullah");
}

if (!(names.includes("Hamza"))) {
  console.log("Names doesn't contain Hamza");
}
