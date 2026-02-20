/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let closest = nums[0] + nums[1] + nums[2];;
    for(let i=0;i<nums.length;i++){
        let l=i+1;
        let r=nums.length-1;
        while(l<r && i < r){
            let sum=nums[i]+nums[l]+nums[r];
            if(Math.abs(target-sum)<Math.abs(target-closest)){
                closest=sum;
            }
            if(sum==target){
                return sum;
            }
            else if(sum<target){
                l++
            }
            else{
                r--;
            }
        }
        
    }
    return closest;
};