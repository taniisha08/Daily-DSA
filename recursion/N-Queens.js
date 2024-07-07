
var ans = [];
var solveNQueens = function (n) {
    let board = Array.from({ length: n }, () => Array(n).fill('.'));
    let leftRow = new Array(n).fill(0);
    let upperDiagonal = new Array((2 * n - 1)).fill(0);
    let lowerDiagonal = new Array((2 * n - 1)).fill(0);

    solve(0, board, ans, leftRow, upperDiagonal, lowerDiagonal, n);
    return ans;
};

function solve(col, board, ans, leftRow, upperDiagonal, lowerDiagonal, n) {
    if (col === n) {
        ans.push(board.map(row => row.join('')));
        return;
    }

    for (let row = 0; row < n; row++) {
        if (leftRow[row] == 0 && 
            lowerDiagonal[row + col] == 0 && 
            upperDiagonal[n - 1 + col - row] == 0) {
            board[row][col] = 'Q';
            leftRow[row] = 1;
            lowerDiagonal[row + col] = 1;
            upperDiagonal[n - 1 + col - row] = 1;
            solve(col + 1, board, ans, leftRow, upperDiagonal, lowerDiagonal, n);
            // backtracking
            board[row][col] = '.';
            leftRow[row] = 0;
            lowerDiagonal[row + col] = 0;
            upperDiagonal[n - 1 + col - row] = 0;
        }
    }
}

solveNQueens(6);
console.log(ans);