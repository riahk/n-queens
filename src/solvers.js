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
  var board = new Board({'n':n}), solutions = [];
  // change 'board' variable name on 27
  // eliminate for loop on ~46
  // build local variable in recursive
  var findSolution = function(board,row,col) {
    board.togglePiece(row,col);
    if(board.hasAnyRooksConflicts()) {
      // board.togglePiece(row,col);
      return; // or something like that...?
    }
    if(row === n - 1) {
      solutions.push(board);
      // board.togglePiece(row,col);
      return;
    }
    for(var i=0;i<n;i++) {
      findSolution(board,row+1,i);
    }
  }

  for(var i=0;i<n;i++) {
    findSolution(board,0,i);
    // board.togglePiece(0,i);
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
