/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s=s.trim()
    let arr=s.split(" ").filter(x=>x!="")
    let l=0
    let r=arr.length-1;
    while(l<r){
        [arr[l],arr[r]]=[arr[r],arr[l]]
        l++;
        r--;
    }
    return arr.join(" ")
};