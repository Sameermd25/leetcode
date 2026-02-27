/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr=x.split("");
    let rev=arr.reverse().join("")
    let num=parseInt(rev);

    if (num > 2147483647 && num < -2147483648) return num;
    else return 0;
};