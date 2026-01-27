/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max=0;
    let min=prices[0];
    for(let i=1;i<prices.length;i++){
        if(prices[i]<min){
            min=prices[i];
        }else{
            let diff=prices[i]-min;
            max=Math.max(max,diff)
        }
    }
    return max;
};