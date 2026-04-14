/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        let str=nums[i].toString()
        let l=str.length;
        if(l%2==0) count++
    }
    return count
};