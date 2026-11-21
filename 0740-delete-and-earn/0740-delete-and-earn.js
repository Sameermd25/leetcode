/**
 * @param {number[]} nums
 * @return {number}
 */

var deleteAndEarn = function(nums) {

    let maxNum = Math.max(...nums);

    let points = new Array(maxNum + 1).fill(0);

    for (let num of nums) {
        points[num] += num;
    }

    let prev2 = 0;
    let prev1 = 0;

    for (let i = 0; i <= maxNum; i++) {

        let current = Math.max(
            points[i] + prev2,
            prev1
        );

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};

