/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n=height.length;
    let left=new Array(n)
    let right=new Array(n);

    let stack=[]

    left[0]=height[0];
    stack.push(height[0])
    for(let i=1;i<n;i++){
        let curr=height[i];

        if(curr>stack[stack.length-1]){
            stack.push(curr)
        }
        left[i]=stack[stack.length-1];
    }

    let stack2=[]

    right[n-1]=height[n-1]
    stack2.push(height[n-1])
    for(let i=n-2;i>=0;i--){
        let curr=height[i];

        if(curr>stack2[stack2.length-1]){
            stack2.push(curr)
        }
        right[i]=stack2[stack2.length-1];
    }

    let water=0;
    for(let i=0;i<n;i++){
        let min=Math.min(left[i],right[i])
        water+=min-height[i]
    }

    return water;

};