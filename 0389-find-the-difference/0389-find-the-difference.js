/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map=new Map();
    for(let i=0;i<s.length;i++){
        map.set(s[i],(map.get(s[i])||0)+1)
    }
    for(let x of t){
        if(!map.has(x) || map.get(x)===0){
            return x;
        }
        map.set(x,map.get(x)-1)
    }
};