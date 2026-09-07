/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l=0;
    let x=0;
    while(l<nums.length){
        if(nums[l]!==val){
            nums[x]=nums[l]
            x++;
        }
        l++;
    }
    return x;
};