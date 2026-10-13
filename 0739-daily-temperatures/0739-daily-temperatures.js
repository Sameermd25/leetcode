
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let res = new Array(n).fill(0);
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            let prevIndex = stack.pop();
            res[prevIndex] = i - prevIndex;
        }

        stack.push(i);
    }

    return res;
};
