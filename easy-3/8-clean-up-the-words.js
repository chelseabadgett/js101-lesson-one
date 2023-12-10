// function cleanUp(sentence){
//   let newSentence= ``;
//   let regex = /[a-zA-Z]/i;
  
//   for(let i=0;i<sentence.length;i++){
//     let matches = sentence.match(regex)
//     newSentence+=matches[0]
//     let firstHalf = sentence.substring(0,matches.index);
//     let secondHalf = sentence.substring(matches.index+1,sentence.length);
//     sentence = firstHalf+secondHalf
//   }
//   return console.log(newSentence)
// }

function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "