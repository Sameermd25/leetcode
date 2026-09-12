/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1 || numRows>=s.length) {
        return s;
    }
    let row=0;
    let arr=new Array(numRows).fill("");
    let dir=1;
    for(let i=0;i<s.length;i++){
        arr[row]+=s[i]
        if(dir==1) row++
        if(dir==0) row--
        if(row==numRows-1) dir=0
        if(row==0) dir=1
    }
    console.log(arr)
    return arr.join("")
};