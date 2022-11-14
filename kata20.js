const blocksAway = function(directions) {
  // Put your solution here
  let start = [0,0];
  let currentDirection = "north";
  let blockAway = {
    direction: [],
    number: []
  };
  for (let i = 0; i < directions.length; i++) {
    if (i%2 == 0) {
      blockAway["direction"].push(directions[i]);
    }
    else {
      blockAway.number.push(directions[i]);
    }
  }

  //console.log(blockAway);
  
  
  for (let i = 0; i < blockAway["direction"].length; i++) {
    
    //console.log(blockAway["number"][i]);
    
    switch(currentDirection) {
      case "north":
        if(blockAway.direction[i] == "right") {
          start[0] += blockAway.number[i];
          currentDirection = "east";
          //console.log(start);
        }
        
        if(blockAway.direction[i] == "left") {
          start[0] -= blockAway.number[i];
          currentDirection = "west";
        }

        break;
      
      case "east":
        if(blockAway.direction[i] == "right") {
          start[1] -= blockAway.number[i];
          currentDirection = "south";
        }
        
        if(blockAway.direction[i] == "left") {
          start[1] += blockAway.number[i];
          currentDirection = "north";
        }

        break;

      case "west":
        if(blockAway.direction[i] == "right") {
          start[1] += blockAway.number[i];
          currentDirection = "north";
        }
        
        if(blockAway.direction[i] == "left") {
          start[1] -= blockAway.number[i];
          currentDirection = "south";
        }

        break;

      case "south":
        if(blockAway.direction[i] == "right") {
          start[0] -= blockAway.number[i];
          currentDirection = "west";
        }
        
        if(blockAway.direction[i] == "left") {
          start[0] += blockAway.number[i];
          currentDirection = "east";
        }

        break;
    }
    
  }
  
  //console.log(start);

  let finalDirection = {
    east: Math.abs(start[0]),
    north: Math.abs(start[1])
  }

  return (finalDirection);
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));