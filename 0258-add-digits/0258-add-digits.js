/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    function sum(n){
        let x=n.toString();
        if(n.length==1) return n;
        let total=0;
        while(n>0){
            total+=n%10;
            n=Math.floor(n/10);
        }
        let str=total.toString();
        if(str.length==1) return total;
        return sum(total)
    }
    return sum(num)
};