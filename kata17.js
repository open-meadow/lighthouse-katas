const urlDecode = function(text) {
  // Put your solution here
  let obj = {}
  let textArr = text.split("&");
  for (let i = 0; i < textArr.length; i++) {
    let newArr = (textArr[i].split("=")).replace(/%20/g," ");
    console.log(newArr);
  }
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
//console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
