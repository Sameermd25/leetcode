/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;

    function dfs(r, c) {
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            grid[r][c] === "0"
        ) {
            return;
        }

        grid[r][c] = "0"; // Mark as visited

        dfs(r + 1, c); // Down
        dfs(r - 1, c); // Up
        dfs(r, c + 1); // Right
        dfs(r, c - 1); // Left
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                count++;
                dfs(r, c);
            }
        }
    }
    return count;
};