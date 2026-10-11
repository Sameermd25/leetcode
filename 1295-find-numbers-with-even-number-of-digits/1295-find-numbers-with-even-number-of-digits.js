/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let res=0;
    for(let n of nums){
        res+=(n.toString().length)%2==0?1:0
    }
    return res
};