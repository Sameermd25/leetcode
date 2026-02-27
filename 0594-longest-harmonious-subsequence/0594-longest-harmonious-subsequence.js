/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = new Map();
    
    // Count frequency
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    let maxLen = 0;
    
    // Check harmonious pairs
    for (let [key, value] of map) {
        if (map.has(key + 1)) {
            maxLen = Math.max(maxLen, value + map.get(key + 1));
        }
    }
    return maxLen
};