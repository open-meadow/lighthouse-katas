const urlDecode = function (text) {
  // Put your solution here
  let obj = {}
  let textArr = text.split("&");
  //console.log(textArr);
  for (let i = 0; i < textArr.length; i++) {
    textArr[i] = textArr[i].replace(/%20/g, " ");
    let newArr = textArr[i].split("=");
    //console.log(newArr);
    obj[newArr[0]] = newArr[1];
    //console.log(obj);
  }
  return(obj);
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
