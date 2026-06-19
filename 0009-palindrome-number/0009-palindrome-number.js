/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=x.toString();
    if(str.length==1) return true;
    let l=0;
    let r=str.length-1;
    while(l<r){
        if(str[l]!==str[r]) return false;
        l++;
        r--;
    }
    return true;
};