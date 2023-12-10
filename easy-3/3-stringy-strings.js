function stringy(num){
  let repeatCount = Math.ceil(num/2);
  let numString = `10`.repeat(repeatCount);
  if(numString.length!==num){
    return numString.substring(0,num)
  } else {
    return numString
  }
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));