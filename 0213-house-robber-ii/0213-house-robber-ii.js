/**
 * House Robber II (Circular Array)
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // Edge cases: If there is only one or two houses
    if(nums.length == 1) return nums[0];
    if(nums.length == 2) return Math.max(nums[0], nums[1]);

    // Since houses are arranged in a circle, we cannot rob both
    // the first and last houses (they are adjacent).
    //
    // So, break the circular problem into two linear problems:
    //
    // Case 1: Rob houses from index 0 to n-2 (exclude last house).
    // Case 2: Rob houses from index 1 to n-1 (exclude first house).

    let x = helper(nums, 0, nums.length - 2);
    let y = helper(nums, 1, nums.length - 1);

    // Return the maximum money from both cases.
    return Math.max(x, y);
};

// Solves the House Robber problem for a linear range [s, e].
function helper(arr, s, e) {

    // pprev = maximum money robbed up to the house before previous.
    // prev  = maximum money robbed up to the previous house.
    let pprev = arr[s];
    let prev = Math.max(arr[s], arr[s + 1]);

    // Start from the third house in the selected range.
    for(let i = s + 2; i <= e; i++) {

        // Two choices:
        // 1. Rob current house: arr[i] + pprev (can't rob adjacent house).
        // 2. Skip current house: prev.
        //
        // Choose whichever gives maximum money.
        let sum = Math.max(arr[i] + pprev, prev);

        // Move the two previous DP states forward.
        pprev = prev;
        prev = sum;
    }

    // Maximum money that can be robbed in this range.
    return prev;
}