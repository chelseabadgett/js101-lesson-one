let rl = require('readline-sync');

let age = rl.question(`What is your age? `)
let retireAge = rl.question(`At what age would you like to retire? `);
let today = new Date()
let currentYear = today.getFullYear()


console.log(`It's ${currentYear}. You will retire in ${retireAge-age+currentYear}.`)
console.log(`You have only ${retireAge-age} years of work to go!`);