/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 2

    for(let i = 2; i < nums.length; i++){
        if(nums[i] !== nums[left-2]){
            nums[left] = nums[i]
            left++
        }
    }
    return left
};
[1,1,2,1,2,3]
//l=3
//i=4
//