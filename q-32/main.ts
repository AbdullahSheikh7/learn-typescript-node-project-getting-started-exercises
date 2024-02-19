let match: boolean = false;

let current_users: string[] = ["Abdullah", "Ahmed", "Aisha", "Amina", "Basit"];

let new_users: string[] = ["Ahmed", "Salman", "Amina", "Sara", "Sayed"];

for (let new_name of new_users) {
  match = false;
  for (let current_name of current_users) {
    if (new_name.toLowerCase() === current_name.toLowerCase()) {
      match = true;
    }
  }
  if (match == false) {
    console.log(new_name + " is available");
  } else if (match == true) {
    console.log(new_name + " is unavailable");
  }
}