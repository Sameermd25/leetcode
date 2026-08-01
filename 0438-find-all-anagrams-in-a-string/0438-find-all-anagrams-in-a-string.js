/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (p.length > s.length) return [];
    let a1=new Array(26).fill(0)
    let a2=new Array(26).fill(0)
    let res=[]
    for(let i=0;i<p.length;i++){
        a1[s[i].charCodeAt(0)-97]++
        a2[p[i].charCodeAt(0)-97]++
    }

    if(isSame(a1,a2)) res.push(0)

    let l=0;
    for(let r=p.length ;r<s.length;r++){
        a1[s[r].charCodeAt(0)-97]++
        a1[s[l].charCodeAt(0)-97]--
        l++
        if(isSame(a1,a2)) res.push(l)
    }

     return res
    function isSame(x,y){
        for(let i=0;i<x.length;i++){
            if(x[i]!==y[i]) return false
        }
        return true;
    }
};