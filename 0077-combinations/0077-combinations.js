/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res=[];
    
    function combinations(start,curr){
        if(curr.length==k){
            res.push([...curr])
            return
        }
        for(let i=start;i<=n;i++){
            curr.push(i)
            combinations(i+1,curr);
            curr.pop()
        }
    }
    combinations(1,[])
    return res
};