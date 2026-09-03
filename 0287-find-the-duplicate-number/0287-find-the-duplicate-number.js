/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let l=0;
    let r=nums.length-1;
    while(l<r){
        const mid = Math.floor((l + r) / 2);
        let count=0;
        for(let num of nums){
            if(num<=mid){
                count++;
            }
        }
        if(count>mid){
            r=mid
        }else{
            l=mid+1
        }
    }
    return l;
};