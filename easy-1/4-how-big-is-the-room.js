let rl = require('readline-sync');

const SQM_TO_SQFT = 10.7639;

console.log(`Enter the length of the room in meters:`);
let length = rl.prompt();
console.log(`Enter the width of the room in meters:`);
let width = rl.prompt();

let areaInM = Number.parseFloat(length*width).toFixed(2);
let sqFt = Number.parseFloat(area * SQM_TO_SQFT).toFixed(2);

console.log(`The area of the room is ${area} square meters (${sqFt} square feet).`)