/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l=0
    let r=nums.length-1;
    let res=[];
    let pos=nums.length-1;
    while(l<=r){
        let ls=nums[l]*nums[l];
        let rs=nums[r]*nums[r];
        if(ls>rs){
            res[pos]=ls
            l++
        }
        else{
            res[pos]=rs
            r--
        }
        pos--;
    }
    return res
};