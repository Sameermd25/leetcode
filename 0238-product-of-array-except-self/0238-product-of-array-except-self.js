/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix=1;
    let res=[]
    for(let i=0;i<nums.length;i++){
        res[i]=prefix;
        prefix*=nums[i]
    }
    let sufix=1;
    for(let i=nums.length-1;i>=0;i--){
        res[i]*=sufix;
        sufix*=nums[i]
    }
    return res
};