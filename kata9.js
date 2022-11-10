const camelCase = function(input) {
  // Your code here
  let newStr = input.split(' '); //convert string into array of words
  for (let i = 1; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1); //Make first letter uppercase then add rest of the letters
  }
  let finalStr = newStr.join(''); // join with ''
  return finalStr;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
