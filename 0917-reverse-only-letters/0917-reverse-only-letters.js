/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let arr=s.split("")
    let l=0;
    let r=arr.length-1;
    while(l<r){
        let x=s[l].charCodeAt(0)
        let y=s[r].charCodeAt(0)
        if(!((x>=65 && x<=90) || (x>=97 && x<=122))){
            l++;
        }
        else if(!((y>=65 && y<=90) || (y>=97 && y<=122))){
            r--;   
        }
        else{
            [arr[l],arr[r]]=[arr[r],arr[l]];
            l++;
            r--;
        }
    }
    return arr.join("");
};