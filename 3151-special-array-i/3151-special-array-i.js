/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    let prev=nums[0]%2==0?true:false;
    for(let i=1;i<nums.length;i++){
        let curr=nums[i]%2==0
        if(!(prev==!curr)){
            return false;
        }
        prev=curr
    }
    return true
};