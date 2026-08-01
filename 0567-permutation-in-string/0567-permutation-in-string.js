/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    let a1=new Array(26).fill(0);
    let a2=new Array(26).fill(0);
    for(let i=0;i<s1.length;i++){
        a1[s1[i].charCodeAt(0)-97]++;
        a2[s2[i].charCodeAt(0)-97]++;
    }
    if(isEqual(a1,a2)) return true;
    let l=0;
    for(let r=s1.length;r<s2.length;r++){
        a2[s2[r].charCodeAt(0)-97]++;
        a2[s2[l].charCodeAt(0)-97]--;
        l++;
        if(isEqual(a1,a2)) return true
    }

    return false;

    function isEqual(x1,x2){
        for(let i=0;i<x1.length;i++){
            if(x1[i]!=x2[i]) return false
        }
        return true;
    }
};