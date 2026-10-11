/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res=""
    let depth=0;
    for(let x of s){
        if(x=="("){
            if(depth>0){
                res+=x
            }
            depth++;
        }else{
            depth--;
            if(depth>0){
                res+=x;
            }
        }
    }
    return res
};