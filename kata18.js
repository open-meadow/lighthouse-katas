const squareCode = function(message) {
  // Put your solution here
  let msgArr = [];
  message = message.replace(/ /g, ""); //remove spaces
  //console.log(message);
  let newMsg = "";
  let messageIndex = 0;
  let numOfCols = Math.ceil(Math.sqrt(message.length)); //find number of columns
  for (let i = 0; i < message.length; i++) {
    //console.log(message.charAt(messageIndex));
    for (let j = 0; j < numOfCols; j++) {
      if (message.charAt(messageIndex)) {
        msgArr += message.charAt(messageIndex); //generate square code
        messageIndex += 1;
      }
    }
    msgArr += ("\n"); //add new line - for some reason this is creating multiple lines
  }
  console.log(msgArr);
  
  for (let i = 0; i < numOfCols; i++) {
    for (let j = i; j < message.length; j += numOfCols) { // add letters from each column to new string. 
      newMsg += message.charAt(j);
    }
    newMsg += " "; //after each word, add space
  }
  return(newMsg);
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
