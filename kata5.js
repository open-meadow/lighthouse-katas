const urlEncode = function(text) {
  // Put your solution here
  //let newText = text.replace(/ /g, "%20");
  let newText1 = "";
  for(let i = 0; i < text.length; i++) {
    (text[i] == " ") ? newText1 += "%20" : newText1 += text[i];
  }
  return newText1;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
