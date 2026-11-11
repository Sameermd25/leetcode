/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==1) return nums[0]
    if(nums.length==2) return Math.max(nums[0],nums[1]);

    let x=helper(nums,0,nums.length-2);
    let y=helper(nums,1,nums.length-1);
    return Math.max(x,y)
};

function helper(arr,s,e){
    let pprev=arr[s];
    let prev=Math.max(arr[s],arr[s+1]);
    for(let i=s+2;i<=e;i++){
        let sum=Math.max(arr[i]+pprev,prev);
        pprev=prev;
        prev=sum;
    }
    return prev;

}