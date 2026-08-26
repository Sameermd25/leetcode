/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations,H=1) {
    if(H>citations.length) return citations.length
    let count=0;
    for(let i=0;i<citations.length;i++){
        if(citations[i]>=H) count++;
    }
    console.log(count)
    if(count>=H){
        return hIndex(citations,H+1)
    }else{
        return H-1;
    }

};