/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let arr=date.split("-")
    let res=""
    for(let x of arr) res+=Number(x).toString(2)+"-"
    res=res.slice(0,-1)
    return res
};