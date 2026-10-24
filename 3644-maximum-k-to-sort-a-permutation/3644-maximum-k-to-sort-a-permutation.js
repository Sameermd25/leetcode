/**
 * @param {number[]} nums
 * @return {number}
 */
var sortPermutation = function(nums) {
    let x=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==i){
            x&=nums[i]
        }
    }
    return x==-1?0:x;
};