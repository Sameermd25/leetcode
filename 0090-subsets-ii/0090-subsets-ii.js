/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res=[]
    nums.sort((a,b)=>a-b)
    function backtracking(index,curr){
        res.push([...curr])
        for(let i=index;i<nums.length;i++){
            if(i>index && nums[i]===nums[i - 1]){
                continue;
            }
            curr.push(nums[i]);
            backtracking(i+1,curr)
            curr.pop();
        }
    }
    backtracking(0,[])
    return res
};