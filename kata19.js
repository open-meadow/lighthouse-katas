const generateBoard = function (whiteQueen, blackQueen) {
  let board = [];

  //initialize game board
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i][j] = 0;
    }
  }

  //place queens
  if (whiteQueen[0] < 8 && blackQueen[0] < 8 && blackQueen[1] < 8 && whiteQueen[1] < 8) {
    board[whiteQueen[0]][whiteQueen[1]] = 1;
    board[blackQueen[0]][blackQueen[1]] = 1;
  }
  else {
    board = "Invalid value";
  }

  return (board);
}

/*

My solution. I believe I was able to get the logic correct. However, lines 88 and 119 are returning an undefined
typeError, even though they are checking for undefined values. 

function queenThreat(generatedBoard) {

  let numOfQueens = 0;
  let threat = false;



  let queenX = whiteQueen[0];
  let queenY = whiteQueen[1];



  //check if there are two "1"'s in the same row. If there is more than one "1", means they can hit each other
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (generatedBoard[i][j] == 1) {
        numOfQueens++;
      }
    }
    if (numOfQueens == 2) {
      threat = true;
      break;
    }
    else {
      numOfQueens = 0;
    }
  }

  numOfQueens = 0;

  //check if there are two "1"s in the same column
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      for (let x = 0; x < 8; x++) {
        if (generatedBoard[x][j] == 1) numOfQueens++
      }
      if (numOfQueens == 2) {
        threat = true;
        break;
      }
      else numOfQueens = 0;
    }
  }

  numOfQueens = 0;

 

  //check if there are two "1"'s in the same diagonal (middle to down right)
  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < 8; j++) {
      for (let x = 0; x < 8; x++) {
        let diagX = i - x;
        let diagY = j + x;
        console.log(diagX);
        console.log(diagY);
        console.log(generatedBoard[diagX][diagY]);
        console.log("---------------------------")

        if (generatedBoard[diagX][diagY] === undefined) {
          break;
        }
        else {
          if (generatedBoard[diagX][diagY] == 1) {
            numOfQueens++;
          }
        }

      }
      if (numOfQueens >= 2) {
        threat = true;
        break;
      }
      else numOfQueens = 0;
    }
  }

  

  //check if there are two "1"'s in the same diagonal (middle to top left)
  for (let i = 0; i < 8; i++) {
    for (let j = 7; j >= 0; j--) {
      for (let x = 0; x < 8; x++) {
        let diagX = i + x;
        let diagY = j - x;
        console.log(diagX);
        console.log(diagY);
        
        

        if (generatedBoard[diagX][diagY] == undefined) {
          break;
        }
        else {
          console.log(generatedBoard[diagX][diagY]);
          if (generatedBoard[diagX][diagY] == 1) {
            numOfQueens++;
          }
        }
        console.log(numOfQueens);
        console.log("---------------------------")

      }
      if (numOfQueens >= 2) {
        threat = true;
        break;
      }
      else numOfQueens = 0;
    }
  }

  return threat;
}

*/

//Actual solution
const queenThreat = function (gB) {
  let result = 'false'
  if (
    (Math.abs(whiteQueen[0] - blackQueen[0]) === Math.abs(whiteQueen[1] - blackQueen[1])) ||
    (blackQueen[0] === whiteQueen[0]) ||
    (blackQueen[1] === whiteQueen[1])
  ) {
    result = true;
  }
  return result;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
