/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    let dp=new Array(cost.length).fill(-1);

    dp[0]=0;
    dp[1]=0;

    for(let i=2;i<=cost.length;i++){
        dp[i]=Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2]);
    }
    console.log(dp)
    return dp[dp.length-1];
    
};

function helper(cost,s){
    

}