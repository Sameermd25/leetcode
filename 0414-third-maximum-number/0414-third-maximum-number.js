/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
        let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (const num of nums) {
        // Skip duplicates
        if (num === first || num === second || num === third) {
            continue;
        }

        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }
    }

    // If there are fewer than 3 distinct numbers
    return third === -Infinity ? first : third;
};