/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res=[];
    function backtracking(open,close,curr){
        if(open+close==2*n){
            res.push(curr);
            return;
        }
        if(open<n){
            backtracking(open+1,close,curr+"(")
        }
        if(close<open){
            backtracking(open,close+1,curr+")")
        }
    }

    backtracking(0,0,"")
    return res
};