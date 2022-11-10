const multiplicationTable = function(maxValue) {
  // Your code here
  let finalString = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) finalString += (i * j) + " ";
    finalString = finalString + "\n";
  }
  return(finalString);
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
