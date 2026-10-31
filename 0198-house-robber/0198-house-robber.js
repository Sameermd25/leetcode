/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    let pprev=nums[0]
    let prev=Math.max(nums[0],nums[1]);
    for(let i=2;i<nums.length;i++){
        let sum=nums[i]+pprev;
        let max=Math.max(sum,prev);
        pprev=prev;
        prev=max
    }
    return prev
};