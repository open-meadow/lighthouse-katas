const organizeInstructors = function(instructors) {
  // Put your solution here
  let instructorCourse = {};
  for (let i = 0; i < instructors.length; i ++) {
    if(instructorCourse[instructors[i].course] === undefined) {  //check if course has already been defined
      instructorCourse[instructors[i].course] = []; //if course has not been defined, initialize course array
    }
    instructorCourse[instructors[i].course].push(instructors[i].name); // once it has been defined, push instructor name to the course
  } 
  return instructorCourse;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
