/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let x=strs[0];
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(x)!==0){
            x=x.slice(0,x.length-1)
        }
    }
    return x
};