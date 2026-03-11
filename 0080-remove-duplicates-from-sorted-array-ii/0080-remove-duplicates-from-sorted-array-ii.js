/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count=1;

    let x=0;
    for(let i=1;i<nums.length;i++){
        if(nums[i]==nums[x] && count<=1){
            x++;
            nums[x]=nums[i]
            count++;
        }
        if(nums[i]!==nums[x]){
            x++;
            nums[x]=nums[i];
            count=1;
        }
    }
    return x+1;
};

//x=2
//c=2
//