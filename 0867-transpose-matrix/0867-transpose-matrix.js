/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let res =[]

    for (let i = 0; i < n; i++) {
        let arr=[]
        for (let j = 0; j < m; j++) {
            arr.push(matrix[j][i]);
        }
        res.push(arr)
    }
    return res;
};