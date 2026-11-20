/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    while (s.length > k) {
        let newStr = "";

        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k);

            let sum = 0;

            for (let digit of group) {
                sum += Number(digit);
            }

            newStr += sum;
        }

        s = newStr;
    }
    return s;
};