const squareCode = function(message) {
  // Put your solution here
  let msgArr = [];
  message = message.replace(/ /g, "");
  //console.log(message);
  let messageIndex = 0;
  let numOfCols = Math.ceil(Math.sqrt(message.length));
  for (let i = 0; i < message.length; i++) {
    //console.log(message.charAt(messageIndex));
    for (let j = 0; j < numOfCols; j++) {
      if (message.charAt(messageIndex)) {
        msgArr.push(message.charAt(messageIndex));
        messageIndex += 1;
      }
    }
    msgArr.push("\n");
  }
  console.log(msgArr);
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
