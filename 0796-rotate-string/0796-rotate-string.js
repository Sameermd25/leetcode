/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

 function areEqual(s1,s2){
    for(let i=0;i<s1.length;i++){
        if(s1[i]!=s2[i]) return false
    }
    return true;
 }
var rotateString = function(s, goal) {
    if(s.length!=goal.length) return false
    if(areEqual(s,goal)) return true;
    for(let i=0;i<s.length;i++){
        if(areEqual(s,goal)) return true;
        let last=s[0];
        s=s.slice(1)+last;
    }
    return false;
};