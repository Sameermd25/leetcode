/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[]
    function backtracking(index,curr){
        res.push([...curr])
        for(let i=index;i<nums.length;i++){
            curr.push(nums[i]);
            backtracking(i+1,curr)
            curr.pop();
        }
    }
    backtracking(0,[])
    return res
};