/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0;

    for(let i=0;i<sentences.length;i++){
        let arr=sentences[i].split(" ");
        max=Math.max(arr.length,max)
    }
    return max;
};