/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set=new Set();
    while(n!=1){
        let res=0;
        while(n!=0){
            res+=(n%10)**2;
            n=Math.floor(n/10);
        }
        if(res==1){
            return true
        }
        if(set.has(res)) return false
        else set.add(res)
        n=res;

    }

    return true;


};