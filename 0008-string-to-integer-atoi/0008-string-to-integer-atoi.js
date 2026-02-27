/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let res=""
    let start=false;
    let i = 0;
    let n = s.length;
    
    while(i<n && s[i]==" ") i++

    if(i<n && (s[i]=="-" || s[i]=="+")){
        res+=s[i]
        i++;
    }

    while (i < n) {
        if (s[i] >= '0' && s[i] <= '9') {
            start = true;
            res += s[i];
        } else {
            break; // stop when non-digit appears
        }
        i++;
    }
    
    if (res === "" || res === "+" || res === "-") {
        return 0;
    }

    let num = parseInt(res);

    // Clamp to 32-bit range
    if (num > 2147483647) return 2147483647;
    if (num < -2147483648) return -2147483648;

    return num;
};