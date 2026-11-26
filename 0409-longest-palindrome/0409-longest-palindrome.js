/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = new Map();
    for (let x of s) {
        map.set(x, (map.get(x) || 0) + 1);
    }

    let single = false;
    let doubles = 0;
    for (let [k, v] of map) {
        doubles += Math.floor(v / 2) * 2;

        if (v % 2 === 1) {
            single = true;
        }

    }
    return single?1+doubles:doubles
};