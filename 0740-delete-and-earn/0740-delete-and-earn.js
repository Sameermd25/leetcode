/**
 * @param {number[]} nums
 * @return {number}
 */

var deleteAndEarn = function(nums) {

    let maxNum = Math.max(...nums);

    // Store total points for each number
    let points = new Array(maxNum + 1).fill(0);

    for (let num of nums) {
        points[num] += num;
    }

    // House Robber DP
    let dp = new Array(maxNum + 1).fill(0);

    dp[0] = points[0];

    if (maxNum >= 1) {
        dp[1] = Math.max(points[0], points[1]);
    }

    for (let i = 2; i <= maxNum; i++) {

        let pick = points[i] + dp[i - 2];

        let skip = dp[i - 1];

        dp[i] = Math.max(pick, skip);
    }

    return dp[maxNum];
};
