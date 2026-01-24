/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let arr=s.split(" ");
    let mapA=new Map();
    for(let i=0;i<s.length;i++){
        let c1=pattern[i];
        let c2=arr[i];
        if(mapA.has(c1)){
            if(mapA.get(c1)!=c2) return false;
        }
        else{
            mapA.set(c1,c2)
        }
    }
    return true;
};