/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map=new Map()
    let l=0;
    let maxF=0;
    let ans=0;
    for(let r=0;r<s.length;r++){
        map.set(s[r],(map.get(s[r])||0)+1);
        maxF=Math.max(maxF,map.get(s[r]));
        while((r-l+1)-maxF>k){
            map.set(s[l],map.get(s[l])-1);
            l++;
        }
        ans=Math.max(ans,r-l+1)
    }
    return ans
};