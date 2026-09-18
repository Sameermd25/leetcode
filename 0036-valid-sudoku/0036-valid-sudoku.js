/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Set();
    let cols = new Set();
    let boxes = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            if (board[i][j] === ".") {
                continue;
            }

            let num = board[i][j];

            // Row
            let rowKey = num + "row" + i;
            if (rows.has(rowKey)) {
                return false;
            }
            rows.add(rowKey);

            // Column
            let colKey = num + "col" + j;
            if (cols.has(colKey)) {
                return false;
            }
            cols.add(colKey);

            // 3 x 3 box
            let box = Math.floor(i / 3) *3 + Math.floor(j / 3);
            let boxKey = num + "box" + box;

            if (boxes.has(boxKey)) {
                return false;
            }
            //console.log(boxKey)
            boxes.add(boxKey);
        }
    }

    return true;
};