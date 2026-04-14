/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr=new Array(s.length);

    for(let i=0;i<indices.length;i++){
        let c=indices[i]
        arr[c]=s[i]
    }

    return arr.join("")

};