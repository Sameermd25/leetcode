/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase()
    let left=0;
    let right=s.length-1;
    while(left<right){
         // skip non-alphanumeric from left
        while (left < right && !isAlphaNum(s[left])) {
            left++;
        }

        // skip non-alphanumeric from right
        while (left < right && !isAlphaNum(s[right])) {
            right--;
        }

        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;

        
    }
    return true;
};

function isAlphaNum(ch) {
    let code = ch.charCodeAt(0);
    return (
        (code >= 97 && code <= 122) || // a-z
        (code >= 48 && code <= 57)     // 0-9
    );
}