/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b)=>a-b);
    for(let i=0;i<citations.length;i++){
        let x=citations[i]
        let y=citations.length-i
        if(x>=y) return y;
    }
    return 0;
};