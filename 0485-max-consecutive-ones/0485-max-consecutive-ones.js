/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max=0;
    let x=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=1){
            x=i;
        }
        max=Math.max(max,i-x)
    }
    return max;
};