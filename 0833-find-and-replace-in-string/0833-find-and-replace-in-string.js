/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
    let map = new Map();

    for (let i = 0; i < indices.length; i++) {
        if (s.startsWith(sources[i], indices[i])) {
            map.set(indices[i], [sources[i], targets[i]]);
        }
    }

    let res = [];
    for (let i = 0; i < s.length; i++) {
        if (map.has(i)) {
            let [x, y] = map.get(i);
            res.push(y)
            i += x.length-1;
        }
        else {
            res.push(s[i])
        }
    }
    // console.log(map)
    // console.log(res)
    return res.join("")

};