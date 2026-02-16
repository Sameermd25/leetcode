/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l=0;
    let r=height.length-1;

    let lmax=0;
    let rmax=0;

    let res=0;

    while(l<r){
        if(height[l]<height[r]){
            if(height[l]>=lmax){
                lmax=height[l]
            }
            else{
                res+=lmax-height[l]
            }
            l++;
        }
        else{
            if(height[r]>=rmax){
                rmax=height[r]
            }
            else{
                res+=rmax-height[r]
            }
            r--;
        }
    }

    return res;

};