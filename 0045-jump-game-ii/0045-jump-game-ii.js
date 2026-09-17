/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let j=1;
    let maxR=nums[0]
    for(let i=1;i<nums.length;i++){
        let curr=nums[i]+i
        maxR=Math.max(maxR,curr)
        if(maxR>=nums.length-1){
            j++;
            return j;
        }
    }
    return j;
};