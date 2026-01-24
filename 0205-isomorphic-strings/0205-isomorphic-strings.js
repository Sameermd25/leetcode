/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapA=new Map();
    let mapB=new Map();
    for(let i=0;i<s.length;i++){
        let curr1=s[i];
        let curr2=t[i];
        if(mapA.has(curr1)){
            if(mapA.get(curr1)!==curr2) return false;
        }else{
            mapA.set(curr1,curr2)
        }

        if(mapB.has(curr2)){
            if(mapB.get(curr2)!==curr1) return false;
        }else{
            mapB.set(curr2,curr1)
        }
    }
    return true;
};