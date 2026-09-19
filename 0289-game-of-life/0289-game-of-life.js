/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let rows = board.length;
    let cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            let live = 0;

            // Check 8 neighbors
            for (let r = i - 1; r <= i + 1; r++) {
                for (let c = j - 1; c <= j + 1; c++) {

                    if (r === i && c === j) {
                        continue;
                    }

                    if (
                        r >= 0 && r < rows &&
                        c >= 0 && c < cols &&
                        (board[r][c] === 1 || board[r][c] === 2)
                    ) {
                        live++;
                    }
                }
            }

            // Alive cell
            if (board[i][j] === 1) {
                if (live < 2 || live > 3) {
                    board[i][j] = 2;
                }
            }

            // Dead cell
            else if (board[i][j] === 0) {
                if (live === 3) {
                    board[i][j] = 3;
                }
            }
        }
    }

    // Convert temporary values
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            if (board[i][j] === 2) {
                board[i][j] = 0;
            }

            if (board[i][j] === 3) {
                board[i][j] = 1;
            }
        }
    }
};