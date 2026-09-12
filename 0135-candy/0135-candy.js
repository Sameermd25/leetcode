/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let res=new Array(ratings.length).fill(1);
    for(let i=1;i<ratings.length;i++){
        if(ratings[i]>ratings[i-1]){
            res[i]=res[i-1]+1
        }
    }
    for(let i=ratings.length-2;i>=0;i--){
        if(ratings[i]>ratings[i+1]){
            res[i]=Math.max(res[i],res[i+1]+1)
        }
    }
    console.log(res)
    let x=res.reduce((a,b)=>b+a,0);
    return x;
};