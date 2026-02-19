/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0;
    let r=height.length-1;
    let water=0;

    while(l<r){
        let min=Math.min(height[l],height[r]);
        let width=r-l;
        let area=min*width
        water=Math.max(water,area);

        if(height[l]<height[r]){
            l++
        }else{
            r--
        }

    }
    return water;
};