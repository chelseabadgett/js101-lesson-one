let rl = require (`readline-sync`);

let name = rl.question(`What is your name?`)

function greetAUser(name){
  if (name.charAt(name.length - 1)==='!'){
    return console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`)
  } else {
    return console.log(`Hello ${name}`)
  }
}

greetAUser(name)
