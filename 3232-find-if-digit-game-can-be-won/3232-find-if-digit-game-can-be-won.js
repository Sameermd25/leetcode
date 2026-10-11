/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let s=0;
    let d=0;
    for(let i=0;i<nums.length;i++){
        let curr=nums[i].toString().length
        if(curr==1) s+=nums[i]
        else  d+=nums[i]
    }
    console.log(s,d)
    if(s>d || s<d) return true
    else return false
};