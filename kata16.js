const makeCase = function(input, caseOp) {
  // Put your solution here
  if (caseOp.includes("camel")) {
    let newStr = input.split(' '); //convert string into array of words
    for (let i = 1; i < newStr.length; i++) {
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1); //Make first letter uppercase then add rest of the letters
    }
    let finalStr = newStr.join(''); // join with ''
    return finalStr;
  }

  else if (caseOp.includes("pascal")) {
    let newStr = input.split(' '); //convert string into array of words
    for (let i = 0; i < newStr.length; i++) {
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1); //Make first letter uppercase then add rest of the letters
    }
    let finalStr = newStr.join(''); // join with ''
    return finalStr;
  }

  else if (caseOp.includes("snake")) {
    let finalStr = input.replace(/ /g,"_");
    return finalStr;
  }
 
  else if (caseOp.includes("kebab")) {
    let finalStr = input.replace(/ /g,"-");
    return finalStr;
  }

  else if (caseOp.includes("title")) {
    let newStr = input.split(' '); //convert string into array of words
    for (let i = 0; i < newStr.length; i++) {
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1); //Make first letter uppercase then add rest of the letters
    }
    let finalStr = newStr.join(' ');
    return finalStr;
  }

  else if (caseOp.includes("vowel")) {
    let finalStr = input.replace(/[aeiou]/g, function(uc) { return uc.toUpperCase(); }); //regex to replace vowel
    return finalStr;
  }

  else if (caseOp.includes("consonant")) {
    let finalStr = input.replace(/[^aeiou]/g, function(uc) { return uc.toUpperCase(); }); //regex to replace consonant
    return finalStr;
  }

  else if (caseOp.includes("upper")) {
    let finalStr = input.toUpperCase;
    return finalStr;
  }

  else if (caseOp.includes("lower")) {
    let finalStr = input.toLowerCase;
    return finalStr;
  }

  else return "Invalid input";
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
