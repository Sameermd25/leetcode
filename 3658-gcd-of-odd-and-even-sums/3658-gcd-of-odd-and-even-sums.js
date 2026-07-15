/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    return n;
};

function sumEven(n){
    let sum=0;
    let count=0;
    for(let i=0;i<n;){
        if(count==n) return sum;
        sum+=i
        i=i+2;
        count++;
    }
    return sum;
}

function sumOdd(n){
    let sum=0;
    let count=0;
    for(let i=0;i<n;){
        if(count==n) return sum;
        sum+=i
        i=i+2;
        count++;
    }
    return sum;
}