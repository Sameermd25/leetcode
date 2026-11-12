/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let prev=0;
    let pprev=0;

    for(let i=2;i<=cost.length;i++){
        let x=Math.min(prev+cost[i-1],pprev+cost[i-2]);
        pprev=prev;
        prev=x;
    }
    return prev
    
};
