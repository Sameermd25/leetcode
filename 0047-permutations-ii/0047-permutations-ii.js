/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let res=[]
    let used=new Array(nums.length).fill(false)
    function backtracking(curr){
        if(curr.length==nums.length){
            res.push([...curr]) 
            return
        }
        for(let i=0;i<nums.length;i++){
            if(used[i]) continue;
            if(nums[i]==nums[i-1] && !used[i - 1]) continue
            curr.push(nums[i])
            used[i]=true;
            backtracking(curr)
            curr.pop()
            used[i]=false
        }
    }
    backtracking([])
    return res
};