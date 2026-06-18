/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map=new Map();
    map.set(0,1);
    let sum=0;
    let count=0;
    for(let x of nums){
        sum+=x;
        let diff=sum-k
        if(map.has(diff)){
            count+=map.get(diff)
        }
        map.set(sum,(map.get(sum) || 0)+1)
    }
    return count;
};