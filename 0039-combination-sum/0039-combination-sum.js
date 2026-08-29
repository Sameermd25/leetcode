/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res=[]
    function backtracking(index,curr,sum){
        if(sum==target){
            res.push([...curr])
            return;
        }
        if(sum>target || index===candidates.length) return
        curr.push(candidates[index]);
        backtracking(index,curr,sum+candidates[index])
        curr.pop()
        backtracking(index+1,curr,sum)

    }
    backtracking(0,[],0)
    return res
};