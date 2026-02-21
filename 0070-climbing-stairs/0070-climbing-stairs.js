/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2){
        return n;
    }
    let singleStep=1;
    let twoStep=2;

    for(let i=3;i<=n;i++){
        let sum=singleStep+twoStep

        singleStep=twoStep;
        twoStep=sum
    }
    return twoStep;
};