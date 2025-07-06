let a = Math.random();
let first; 
if (a > 0 && a <= 0.3) {
    first = "Crazy";
}
else if (a > 0.3 && a <= 0.6) {
    first = "Amazing";
}
else {
    first = "Fire";
}
let b = Math.random();
let second;
if (b > 0 && b <= 0.3) {
    second = "Engine";
}
else if (b > 0.3 && b <= 0.6) {
    second = "Food";
}
else {
    second = "Garments";
}
let c = Math.random();
let third;
if (c > 0 && c <= 0.3) {
    third = "Bros";
}
else if (c > 0.3 && c <= 0.6) {
    third = "Limited";
}
else {
    third = "Hub";
}
console.log(`${ first } ${ second } ${ third }`);