// function greetings(nameArray, occObj){
//   let fullName = nameArray.reduce(
//     (acc, currVal) => acc + ' ' + currVal,'');
//   let fullOcc = Object.values(occObj).reduce(
//     (acc, currVal) => acc + ' ' + currVal,'');
//   return `Hello, ${fullName}! Nice to have a ${fullOcc} around.`
// }

function greetings(nameArray,occObj){
  return `Hello, ${nameArray.join(' ')}! Nice to have a ${occObj[`title`]} ${occObj[`occupation`]}`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.