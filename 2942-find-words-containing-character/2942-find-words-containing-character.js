/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let res=[]
    for(let i=0;i<words.length;i++){
        let word=words[i];
        if(word.includes(x)){
            res.push(i)
        }
    }
    return res
};