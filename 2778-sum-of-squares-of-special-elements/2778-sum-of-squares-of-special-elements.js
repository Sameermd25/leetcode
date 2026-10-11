/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let sum=0;
    for(let i=0;i<nums.length;i++){
        let x=i+1;
        if(nums.length%x==0){
            sum+=nums[i]**2
        }
    }
    return sum
};