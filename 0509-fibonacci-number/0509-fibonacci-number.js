/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n== 1 || n==0){
        return n;
    }
    let l=0;
    let r=1;
    for(let i=2;i<=n;i++){
        let sum=l+r;
        l=r;
        r=sum;
    }
    return r;
};