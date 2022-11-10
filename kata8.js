const repeatNumbers = function(data) {
  // Put your solution here
  let str = "";
  for (let i = 0; i < data.length; i++) {
    if (i > 0) str += ", ";
    for (let j = 0; j < data[i][1]; j++) {
      str += data[i][0];
    }
  }
  return str;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
