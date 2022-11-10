const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let a = 0;
  let requiredIndex = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (a < instructors[i]["name"].length){
      requiredIndex = i;
      a = instructors[i]["name"].length;
    }
  }
  return instructors[requiredIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));