/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])||0)+1)
    }
    let arr=[...map.entries()].sort((a,b)=>b[1]-a[1])
    
    arr.length=k
    let res=[]
    for(let item of arr){
        res.push(item[0])
    }
    console.log(res)
    return res
};