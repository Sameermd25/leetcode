/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];
    
    let s=0;
    let e=0;
    let res=[]
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==(nums[i-1]+1)){
            if(s==e){
                res.push(nums[s].toString())
            }
            else{
                res.push(nums[s]+"->"+nums[e])
            }
            s=i;
        }
        e++;
    }

    if (s === e) {
        res.push(nums[s].toString());
    } else {
        res.push(nums[s] + "->" + nums[e]);
    }

    return res

};