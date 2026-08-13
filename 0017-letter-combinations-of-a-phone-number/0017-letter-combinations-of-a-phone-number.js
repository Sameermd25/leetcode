/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length==0) return [];
    const obj = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let res=[];

    backtrack(0,"")
    function backtrack(index,curr){
        if(index==digits.length){
            res.push(curr);
            return;
        }
        let x=obj[digits[index]];
        for(let item of x){
            backtrack(index+1,curr+item)
        }
    }
    return res
};