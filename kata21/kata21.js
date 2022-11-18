let prompt = require("prompt-sync")();

// code below (replace this example)


let randomNumber = Math.floor(Math.random() * 10);
let answer = [];
let noTries = 0;

do {
  answer[noTries] = prompt("Guess a number: ");
  console.log("You answered: " + answer[noTries]);

  if (isNaN(answer[noTries])) console.log("Not a number. Try Again");
  else {

    if (answer[noTries] === answer[noTries - 1]) console.log("Already guessed!");
    else {
      if (answer[noTries] < randomNumber) console.log("Too low!");
      else if (answer[noTries] > randomNumber) console.log("Too high!");
      else break;
    }
  }
  noTries++;
} while (answer[noTries] !== randomNumber);

console.log(`You did it! You took ${noTries} attempts.`);
