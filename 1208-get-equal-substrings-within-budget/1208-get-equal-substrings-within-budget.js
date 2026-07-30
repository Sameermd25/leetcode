/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let cost=0;
    let max=0;
    let l=0;
    for(let i=0;i<s.length;i++){
        cost+=Math.abs(s.charCodeAt(i)-t.charCodeAt(i))
        while(cost>maxCost){
            cost-=Math.abs(s.charCodeAt(l)-t.charCodeAt(l));
            l++;
        }
        max=Math.max(max,i-l+1)
    }
    return max
};