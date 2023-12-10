function twice (input){
  let string = `${input}`;
  let halfway = Math.floor(string.length/2)
  let leftSide = string.substring(0,halfway)
  let rightSide = string.substring(halfway,string.length)
  if(leftSide === rightSide){
    return console.log(input)
  } else {
    return console.log(input * 2)
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676