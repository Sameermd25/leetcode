/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) { 
    let l=0;
    let r=height.length-1;

    let max=0;

    while(l<r){
        let minV=Math.min(height[l],height[r]);
        let area=minV*(r-l);
        max=Math.max(area,max)
        if(height[l]<height[r]){
            l++
        }
        else{
            r--;
        }
    }
    return max
};