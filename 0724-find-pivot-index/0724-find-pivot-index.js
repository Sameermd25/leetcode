/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const totalSum = nums.reduce((acc,num)=>acc+num,0)
    let leftSum = 0

    for(let num of nums){
        let rightSum = totalSum-leftSum-num

        if(rightSum === leftSum){
            return nums.indexOf(num)
        }

        leftSum +=num
    }

    return -1
};