/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack=[];
    let count=0;
    for(let x of s){
        if(x=="("){
            stack.push("(")
        }else{
            if(stack.length>0){
                stack.pop()
            }else{
                count++
            }
        }
    }
    return stack.length+count
};