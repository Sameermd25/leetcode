/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr=[];
    for(let i=0;i<numRows;i++){
        let curr=[];
        for(let j=0;j<=i;j++){
            if(j==0 || j==i){
                curr.push(1)
            }else{
                curr.push(arr[i-1][j-1]+arr[i-1][j])
            }
        }
        arr.push(curr)
    }
    return arr;
};