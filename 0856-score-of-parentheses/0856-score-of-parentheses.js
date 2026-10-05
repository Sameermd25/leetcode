/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack=[0]
    for(let ch of s){
        if(ch=="("){
            stack.push(0)
        }else{
            let curr=stack.pop();
            if(curr==0){
                curr=1;
            }else{
                curr=2*curr;
            }
            stack[stack.length-1]+=curr
        }
    }
    return stack[stack.length-1]
};