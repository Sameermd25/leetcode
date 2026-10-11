/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count=0;
    for(let n of nums){
        if(n%3!==0){
            count++
        }
    }
    return count
};