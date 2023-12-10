function triangle(num){
  let index = 0
  while(index<num){
    let currLine = ` `.repeat(num-index-1)+ `*`.repeat(index+1)
    console.log(currLine)
    index+=1
  }
}

triangle(5);
triangle(9);