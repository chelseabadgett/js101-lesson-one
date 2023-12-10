function shortLongShort(str1,str2){
  if(str1.length > str2.length){
    return console.log(str2+str1+str2)
  } else {
    return console.log(str1+str2+str1)
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"