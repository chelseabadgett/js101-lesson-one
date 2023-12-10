function crunch(sentence){
  let newSentence = ``;
  for(let i= 0; i < sentence.length; i++){
    if(sentence[i]!== newSentence[newSentence.length -1 ]){
      newSentence+=sentence[i]
    }}
    return console.log(newSentence);
  }
  

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""


// Futher Exploration
function crunchRegEx(sentence){
  return console.log(sentence.replace(/(.)\1+/g, '$1'))
}

crunchRegEx('ddaaiillyy ddoouubbllee');    // "daily double"
crunchRegEx('4444abcabccba');              // "4abcabcba"
crunchRegEx('ggggggggggggggg');            // "g"
crunchRegEx('a');                          // "a"
crunchRegEx('');                           // ""