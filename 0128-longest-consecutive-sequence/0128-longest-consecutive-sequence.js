/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set=new Set(nums);

    let max=0;
    let currMax=1;
    for(let num of set){
        currMax=1
        let curr=num
        if(set.has(curr+1)) continue;
        while(set.has(curr-1)){
            currMax++;
            curr--;
        }
        max=Math.max(max,currMax)
    }
    return max
};