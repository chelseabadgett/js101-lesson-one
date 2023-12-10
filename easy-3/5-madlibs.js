let rl = require(`readline-sync`);

let noun = rl.question(`Enter a noun: `);
let verb = rl.question(`Enter a verb:`);
let adjective = rl.question(`Enter an adjective: `);
let adverb = rl.question(`Enter an adverb: `);

console.log(`Do you ${verb} your ${adjective} ${noun} ${adjective}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);