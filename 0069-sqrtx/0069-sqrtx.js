/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l=1;
    let r=x;
    let ans=0;
    while(l<=r){
        let m=Math.floor((l+r)/2);
        if(m*m==x){
            return m
        }
        else if(m*m<x){
            ans=m;
            l=m+1;
        }else{
            r=m-1;
        }
    }
    return ans;
};