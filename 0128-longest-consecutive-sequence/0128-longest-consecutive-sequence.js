/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let curr = num;
            while (set.has(curr)) {
                curr++;
            }
            longest = Math.max(longest, curr - num);
        }
    }

    return longest;
};