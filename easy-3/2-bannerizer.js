function loginBox(string){

  if(string.length>45){
    console.log(`+${"=".repeat(46)}+`)
    console.log(`|${" ".repeat(46)}|`)
    let fullSentence = `${string}`
    let newLinesArray = [];
    while (fullSentence.length > 45){
      let row = fullSentence.substring(0,44)
      newLinesArray.push(`| ${row} |`)
      fullSentence = fullSentence.substring(44,fullSentence.length)
    }
    newLinesArray.forEach(line => console.log(line))
    console.log(`|${" ".repeat(46)}|`)
    console.log(`+${"=".repeat(46)}+`)

  } else {
    console.log(`+${"=".repeat(string.length+2)}+`);
    console.log(`|${" ".repeat(string.length+2)}|`);
    console.log(`| ${string} |`);
    console.log(`|${" ".repeat(string.length+2)}|`);
    console.log(`+${"=".repeat(string.length+2)}+`);
  }
}

let rl = require(`readline-sync`);

let sentence = rl.question(`What would you like to be presented in a banner?`);


loginBox('HELLOOOOO');

loginBox('Hello Ashly I love you!')

loginBox(sentence);
