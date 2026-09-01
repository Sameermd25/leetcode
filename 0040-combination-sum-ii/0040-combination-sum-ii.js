/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    let res=[]
    //[1,1,2,5,6,7,10]
    function backtracking(index,curr,sum){
        for(let i=index;i<candidates.length;i++){
            if(candidates[i]==candidates[i-1] && i>index) continue
            if(sum+candidates[i]==target){
                res.push([...curr,candidates[i]])
            }
            if(sum+candidates[i]>target) break;
            curr.push(candidates[i])
            backtracking(i+1,curr,sum+candidates[i])
            curr.pop()
        }
        
    }
    backtracking(0,[],0)
    return res
};