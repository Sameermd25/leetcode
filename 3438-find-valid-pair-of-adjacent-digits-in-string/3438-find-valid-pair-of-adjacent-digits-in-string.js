/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
    let freq = {};

    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let i = 0; i < s.length - 1; i++){
        let a = s[i];
        let b = s[i + 1];
        if (a !== b && freq[a] === Number(a) && freq[b] === Number(b)){
            return a + b;
        }
    }

    return "";
};