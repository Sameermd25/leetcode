/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res=[];
    function permutations(curr){
        if(curr.length==nums.length){
            res.push([...curr])
        }
        for(let i=0;i<nums.length;i++){
            if(curr.includes(nums[i])) continue
            curr.push(nums[i])
            permutations(curr);
            curr.pop()
        }
    }
    permutations([])
    return res
};