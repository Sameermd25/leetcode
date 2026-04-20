/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let max=0;
    for(let i=colors.length-1;i>=0;i--){
        if(colors[i]!=colors[0]){
            max=i;
            break;
        }
    }
    for(let i=0;i<colors.length;i++){
        if(colors[i]!=colors[colors.length-1]){
            max=Math.max(max,colors.length-1-i);
            break;
        }
    }
    return max;
};