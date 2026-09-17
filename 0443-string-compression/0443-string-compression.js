/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let l = 0;
    let r = 0;
    let res = ""
    let count = 0;
    while (r < chars.length) {
        if (chars[l] !== chars[r]) {
            res+=(chars[l])
            if (count !== 1) res+=(count.toString())
            l = r;
            count = 0;
        }
        r++;
        count++;
    }
    res+=(chars[l]);

    if (count !== 1) {
        res+=(count.toString());
    }
    let arr=res.split("");
    for (let i = 0; i < arr.length; i++) {
        chars[i] = arr[i];
    }

    return res.length;
};