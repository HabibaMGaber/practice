let budget = 600;
if (budget >= 500) {
  console.log("You can order pizza!");
} else if (budget == 550) {
  console.log("You can order pepsi!");
} else {
  console.log("You cannot order just pasta!");
}
let switsher = "600";
switch (switsher) {
  case ">=500":
    console.log("You can order pizza!");
    break;
  case "==550":
    console.log("You can order pepsi!");
    break;
  default:
    console.log("You can order just pasta!");
}
const names = ["John", "Jane", "Jack", "Jill"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}
let j = 0;
do {
  console.log(names[j]);
  j++;
} while (j < names.length);