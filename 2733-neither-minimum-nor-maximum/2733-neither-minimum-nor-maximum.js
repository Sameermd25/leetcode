/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length<3){
        return -1;
    }
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    for(const num of nums) {
        if(num!==min && num!==max) {
            return num;
        }
    }
    return -1
};