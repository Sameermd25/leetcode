/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let map=new Map();
    map.set(0,-1);

    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        let x=sum%k;
        if(map.has(x)){
            let y=map.get(x);
            if(i-y>=2) return true;
        }else{
            map.set(x,i)
        }
    }
    return false;
};