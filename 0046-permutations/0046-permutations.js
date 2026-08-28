/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res=[];
    let used=new Array(nums.length).fill(false)
    function permutations(curr){
        if(curr.length==nums.length){
            res.push([...curr])
        }
        for(let i=0;i<nums.length;i++){
            if(used[i]) continue

            used[i]=true;
            curr.push(nums[i])

            permutations(curr);

            curr.pop()
            used[i]=false;
        }
    }
    permutations([])
    return res
};