/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let rows=0;
    while(n>rows){
        rows++;
        n-=rows;
    }
    return rows
};