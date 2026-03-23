/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s=s.trim();
    let a=s.split(" ");
    for(let i=0;i<a.length;){
        if(a[i]=="") a.splice(i,1)
        else i++;
    }
    let l=0;
    let r=a.length-1;
    while(l<r){
        [a[l],a[r]]=[a[r],a[l]];
        l++;
        r--;
    }
    return a.join(" ")
};