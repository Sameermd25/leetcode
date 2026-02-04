/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max=0;
    let sum=0;
    for(let i=0;i<k;i++){
        sum+=nums[i];
    }
    max=sum/k;
    for(let r=k;r<nums.length;r++){
        sum-=nums[r-k];
        sum+=nums[r];
        max=Math.max(max,sum/k)
    }
    return max;
};