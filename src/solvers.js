/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if(n > 5) { return; }
  var solutions = [];
  var findSolution = function(oldBoard,row,col) {
    var board = new Board(oldBoard.rows());
    board.togglePiece(row,col);
    board.rows().forEach(function(row){console.log(row.toString())});
    // console.log("row: " + row + ", col: " + col);
    // console.log("-----");
    if(board.hasAnyRooksConflicts()) {
      board.togglePiece(row,col);
      return;
    }
    if(row === n - 1) {
      // console.log("Solution found above.");
      solutions.push(board);
      board.togglePiece(row,col);
      return;
    }
    for(var j=0;j<n;j++) {
      findSolution(board,row+1,j);
    }
    board.togglePiece(row,col);
  }

  for(var i=0;i<n;i++) {
    var board = new Board({'n':n});
    findSolution(board,0,i);
  }

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutions.length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
