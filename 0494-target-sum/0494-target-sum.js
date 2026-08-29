/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count=0;
    function backtracking(index,curr){
        if(nums.length==index){
            if(curr==target) count++
            return;
        }
        backtracking(index+1,curr+nums[index])
        backtracking(index+1,curr-nums[index])
    }
    backtracking(0,0)
    return count
};