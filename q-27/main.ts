let color: string;

function givePoints(color: string) {
  if (color == "green") {
    return "You've just earned 5 points!";
  } else if (color == "yellow") {
    return "You've just earned 10 points!";
  } else if (color == "red") {
    return "You've just earned 15 points!";
  }
}

// v1
color = "green";
console.log(givePoints(color));

// v2
color = "red";
console.log(givePoints(color));

// v3
color = "yellow";
console.log(givePoints(color));
