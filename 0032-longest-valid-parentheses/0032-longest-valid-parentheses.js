/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let open = 0
    let close = 0
    let max = 0
    for(let char of s){
        if(char==="("){
            open++
        }else{
            close++
        }

        if(open === close){
            max = Math.max(max,open+close)
        }

        if(close > open){
            open = 0
            close = 0
        }
    }
    open = 0
    close = 0

    for(let  i = s.length-1; i >=0 ; i--){
        if(s[i] === "("){
            open++
        }else{
            close++
        }


        if(open === close){
            max = Math.max(max,close+open)
        }

        if(open > close){
            close = 0
            open = 0
        }
    }
    return max
};