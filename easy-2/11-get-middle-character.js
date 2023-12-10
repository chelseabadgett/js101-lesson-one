function centerOf(sentence){
  let halfway = sentence.length/2
  if(sentence.length % 2 ===0){
    let centerString = sentence.substring(halfway-1,halfway+1)
    return console.log(centerString)
   } else {
    let centerIndex = (sentence.length-1)/2
    return console.log(sentence[centerIndex])
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

